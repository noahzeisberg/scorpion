package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/NoahOnFyre/gengine/filesystem"
	"github.com/google/go-github/github"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"io"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"time"
)

var (
	settings     ScorpionSettings
	userDir, _   = os.UserHomeDir()
	scorpionDir  = userDir + "\\.scorpion\\"
	downloadDir  = scorpionDir + "downloads\\"
	packageDir   = scorpionDir + "packages\\"
	tempDir      = scorpionDir + "tmp\\"
	githubClient = github.NewClient(nil)
	httpClient   = &http.Client{
		Transport: &http.Transport{},
	}
)

// App struct
type App struct {
	ctx context.Context
}

type ScorpionSettings struct {
	Transparency bool `json:"transparency"`
	DisplayCards bool `json:"display_cards"`
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// Startup is called when the app starts. The context is saved,
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	for _, path := range []string{
		scorpionDir,
		packageDir,
		downloadDir,
		tempDir,
	} {
		if !filesystem.Exists(path) {
			os.MkdirAll(path, os.ModePerm)
		}
	}

	settings = ScorpionSettings{}
	preferenceString, err := os.ReadFile(scorpionDir + "settings.json")
	if err != nil {
		return
	}
	err = json.Unmarshal(preferenceString, &settings)
	if err != nil {
		return
	}
}

func (a *App) GetSettings() ScorpionSettings {
	return settings
}

func (a *App) UpdateSettings(settings ScorpionSettings) {
	data, err := json.Marshal(settings)
	if err != nil {
		return
	}
	os.WriteFile(scorpionDir+"settings.json", data, os.ModePerm)
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// SearchPackage returns the GitHub search results for the given query string.
func (a *App) SearchPackage(query string) []github.Repository {
	repositories, response, err := githubClient.Search.Repositories(context.Background(), query, &github.SearchOptions{})
	if err != nil {
		return nil
	}
	fmt.Println(response.StatusCode)
	return repositories.Repositories
}

func (a *App) OpenExplorer(path string) {
	exec.Command("cmd.exe", "/c", "start", "explorer.exe", path).Run()
}

func (a *App) OpenDownloadPath() {
	a.OpenExplorer(downloadDir)
}

func (a *App) DownloadFile(url string) {
	var downloadedData []byte

	request, err := http.NewRequest("GET", url, nil)
	if err != nil {
		runtime.EventsEmit(a.ctx, "error", fmt.Sprint(err))
		return
	}

	request.Header.Set("User-Agent", "Scorpion/1.0")
	request.Close = true

	response, err := httpClient.Do(request)
	if err != nil {
		runtime.EventsEmit(a.ctx, "error", fmt.Sprint(err))
		return
	}

	buffer := make([]byte, 4096)
	var downloaded int64

	startTime := time.Now()

	for {
		n, err := response.Body.Read(buffer)
		if err != nil && err != io.EOF {
			runtime.EventsEmit(a.ctx, "error", fmt.Sprint(err))
			break
		}
		if n == 0 {
			break
		}

		downloaded += int64(n)
		downloadedData = append(downloadedData, buffer[:n]...)

		currentTime := time.Now()
		progress := float64(downloaded) / float64(response.ContentLength) * 100

		if currentTime.Sub(startTime).Milliseconds() >= 250 {
			startTime = currentTime
			runtime.EventsEmit(a.ctx, "updateProgress", int(progress))
		}
	}
	err = response.Body.Close()
	if err != nil {
		runtime.EventsEmit(a.ctx, "error", fmt.Sprint(err))
		return
	}
	fmt.Println("Download succeed!")
	runtime.EventsEmit(a.ctx, "updateProgress", 100)

	filename := strings.Split(url, "/")[len(strings.Split(url, "/"))-1]
	err = os.WriteFile(downloadDir+filename, downloadedData, os.ModePerm)
	if err != nil {
		runtime.EventsEmit(a.ctx, "error", fmt.Sprint(err))
		return
	}

	command := exec.Command("cmd.exe", "/c", "start", downloadDir+filename)
	command.Run()
}
