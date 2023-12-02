export namespace github {
	
	export class CodeOfConduct {
	    name?: string;
	    key?: string;
	    url?: string;
	    body?: string;
	
	    static createFrom(source: any = {}) {
	        return new CodeOfConduct(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.key = source["key"];
	        this.url = source["url"];
	        this.body = source["body"];
	    }
	}
	export class License {
	    key?: string;
	    name?: string;
	    url?: string;
	    spdx_id?: string;
	    html_url?: string;
	    featured?: boolean;
	    description?: string;
	    implementation?: string;
	    permissions?: string[];
	    conditions?: string[];
	    limitations?: string[];
	    body?: string;
	
	    static createFrom(source: any = {}) {
	        return new License(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.key = source["key"];
	        this.name = source["name"];
	        this.url = source["url"];
	        this.spdx_id = source["spdx_id"];
	        this.html_url = source["html_url"];
	        this.featured = source["featured"];
	        this.description = source["description"];
	        this.implementation = source["implementation"];
	        this.permissions = source["permissions"];
	        this.conditions = source["conditions"];
	        this.limitations = source["limitations"];
	        this.body = source["body"];
	    }
	}
	export class Match {
	    text?: string;
	    indices?: number[];
	
	    static createFrom(source: any = {}) {
	        return new Match(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.text = source["text"];
	        this.indices = source["indices"];
	    }
	}
	export class Plan {
	    name?: string;
	    space?: number;
	    collaborators?: number;
	    private_repos?: number;
	
	    static createFrom(source: any = {}) {
	        return new Plan(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.space = source["space"];
	        this.collaborators = source["collaborators"];
	        this.private_repos = source["private_repos"];
	    }
	}
	export class Organization {
	    login?: string;
	    id?: number;
	    node_id?: string;
	    avatar_url?: string;
	    html_url?: string;
	    name?: string;
	    company?: string;
	    blog?: string;
	    location?: string;
	    email?: string;
	    description?: string;
	    public_repos?: number;
	    public_gists?: number;
	    followers?: number;
	    following?: number;
	    // Go type: time
	    created_at?: any;
	    // Go type: time
	    updated_at?: any;
	    total_private_repos?: number;
	    owned_private_repos?: number;
	    private_gists?: number;
	    disk_usage?: number;
	    collaborators?: number;
	    billing_email?: string;
	    type?: string;
	    plan?: Plan;
	    url?: string;
	    events_url?: string;
	    hooks_url?: string;
	    issues_url?: string;
	    members_url?: string;
	    public_members_url?: string;
	    repos_url?: string;
	
	    static createFrom(source: any = {}) {
	        return new Organization(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.login = source["login"];
	        this.id = source["id"];
	        this.node_id = source["node_id"];
	        this.avatar_url = source["avatar_url"];
	        this.html_url = source["html_url"];
	        this.name = source["name"];
	        this.company = source["company"];
	        this.blog = source["blog"];
	        this.location = source["location"];
	        this.email = source["email"];
	        this.description = source["description"];
	        this.public_repos = source["public_repos"];
	        this.public_gists = source["public_gists"];
	        this.followers = source["followers"];
	        this.following = source["following"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.total_private_repos = source["total_private_repos"];
	        this.owned_private_repos = source["owned_private_repos"];
	        this.private_gists = source["private_gists"];
	        this.disk_usage = source["disk_usage"];
	        this.collaborators = source["collaborators"];
	        this.billing_email = source["billing_email"];
	        this.type = source["type"];
	        this.plan = this.convertValues(source["plan"], Plan);
	        this.url = source["url"];
	        this.events_url = source["events_url"];
	        this.hooks_url = source["hooks_url"];
	        this.issues_url = source["issues_url"];
	        this.members_url = source["members_url"];
	        this.public_members_url = source["public_members_url"];
	        this.repos_url = source["repos_url"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class TextMatch {
	    object_url?: string;
	    object_type?: string;
	    property?: string;
	    fragment?: string;
	    matches?: Match[];
	
	    static createFrom(source: any = {}) {
	        return new TextMatch(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.object_url = source["object_url"];
	        this.object_type = source["object_type"];
	        this.property = source["property"];
	        this.fragment = source["fragment"];
	        this.matches = this.convertValues(source["matches"], Match);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class User {
	    login?: string;
	    id?: number;
	    node_id?: string;
	    avatar_url?: string;
	    html_url?: string;
	    gravatar_id?: string;
	    name?: string;
	    company?: string;
	    blog?: string;
	    location?: string;
	    email?: string;
	    hireable?: boolean;
	    bio?: string;
	    public_repos?: number;
	    public_gists?: number;
	    followers?: number;
	    following?: number;
	    // Go type: Timestamp
	    created_at?: any;
	    // Go type: Timestamp
	    updated_at?: any;
	    // Go type: Timestamp
	    suspended_at?: any;
	    type?: string;
	    site_admin?: boolean;
	    total_private_repos?: number;
	    owned_private_repos?: number;
	    private_gists?: number;
	    disk_usage?: number;
	    collaborators?: number;
	    plan?: Plan;
	    url?: string;
	    events_url?: string;
	    following_url?: string;
	    followers_url?: string;
	    gists_url?: string;
	    organizations_url?: string;
	    received_events_url?: string;
	    repos_url?: string;
	    starred_url?: string;
	    subscriptions_url?: string;
	    text_matches?: TextMatch[];
	    permissions?: {[key: string]: boolean};
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.login = source["login"];
	        this.id = source["id"];
	        this.node_id = source["node_id"];
	        this.avatar_url = source["avatar_url"];
	        this.html_url = source["html_url"];
	        this.gravatar_id = source["gravatar_id"];
	        this.name = source["name"];
	        this.company = source["company"];
	        this.blog = source["blog"];
	        this.location = source["location"];
	        this.email = source["email"];
	        this.hireable = source["hireable"];
	        this.bio = source["bio"];
	        this.public_repos = source["public_repos"];
	        this.public_gists = source["public_gists"];
	        this.followers = source["followers"];
	        this.following = source["following"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.suspended_at = this.convertValues(source["suspended_at"], null);
	        this.type = source["type"];
	        this.site_admin = source["site_admin"];
	        this.total_private_repos = source["total_private_repos"];
	        this.owned_private_repos = source["owned_private_repos"];
	        this.private_gists = source["private_gists"];
	        this.disk_usage = source["disk_usage"];
	        this.collaborators = source["collaborators"];
	        this.plan = this.convertValues(source["plan"], Plan);
	        this.url = source["url"];
	        this.events_url = source["events_url"];
	        this.following_url = source["following_url"];
	        this.followers_url = source["followers_url"];
	        this.gists_url = source["gists_url"];
	        this.organizations_url = source["organizations_url"];
	        this.received_events_url = source["received_events_url"];
	        this.repos_url = source["repos_url"];
	        this.starred_url = source["starred_url"];
	        this.subscriptions_url = source["subscriptions_url"];
	        this.text_matches = this.convertValues(source["text_matches"], TextMatch);
	        this.permissions = source["permissions"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Repository {
	    id?: number;
	    node_id?: string;
	    owner?: User;
	    name?: string;
	    full_name?: string;
	    description?: string;
	    homepage?: string;
	    code_of_conduct?: CodeOfConduct;
	    default_branch?: string;
	    master_branch?: string;
	    // Go type: Timestamp
	    created_at?: any;
	    // Go type: Timestamp
	    pushed_at?: any;
	    // Go type: Timestamp
	    updated_at?: any;
	    html_url?: string;
	    clone_url?: string;
	    git_url?: string;
	    mirror_url?: string;
	    ssh_url?: string;
	    svn_url?: string;
	    language?: string;
	    fork?: boolean;
	    forks_count?: number;
	    network_count?: number;
	    open_issues_count?: number;
	    stargazers_count?: number;
	    subscribers_count?: number;
	    watchers_count?: number;
	    size?: number;
	    auto_init?: boolean;
	    parent?: Repository;
	    source?: Repository;
	    organization?: Organization;
	    permissions?: {[key: string]: boolean};
	    allow_rebase_merge?: boolean;
	    allow_squash_merge?: boolean;
	    allow_merge_commit?: boolean;
	    topics?: string[];
	    license?: License;
	    private?: boolean;
	    has_issues?: boolean;
	    has_wiki?: boolean;
	    has_pages?: boolean;
	    has_projects?: boolean;
	    has_downloads?: boolean;
	    license_template?: string;
	    gitignore_template?: string;
	    archived?: boolean;
	    team_id?: number;
	    url?: string;
	    archive_url?: string;
	    assignees_url?: string;
	    blobs_url?: string;
	    branches_url?: string;
	    collaborators_url?: string;
	    comments_url?: string;
	    commits_url?: string;
	    compare_url?: string;
	    contents_url?: string;
	    contributors_url?: string;
	    deployments_url?: string;
	    downloads_url?: string;
	    events_url?: string;
	    forks_url?: string;
	    git_commits_url?: string;
	    git_refs_url?: string;
	    git_tags_url?: string;
	    hooks_url?: string;
	    issue_comment_url?: string;
	    issue_events_url?: string;
	    issues_url?: string;
	    keys_url?: string;
	    labels_url?: string;
	    languages_url?: string;
	    merges_url?: string;
	    milestones_url?: string;
	    notifications_url?: string;
	    pulls_url?: string;
	    releases_url?: string;
	    stargazers_url?: string;
	    statuses_url?: string;
	    subscribers_url?: string;
	    subscription_url?: string;
	    tags_url?: string;
	    trees_url?: string;
	    teams_url?: string;
	    text_matches?: TextMatch[];
	
	    static createFrom(source: any = {}) {
	        return new Repository(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.node_id = source["node_id"];
	        this.owner = this.convertValues(source["owner"], User);
	        this.name = source["name"];
	        this.full_name = source["full_name"];
	        this.description = source["description"];
	        this.homepage = source["homepage"];
	        this.code_of_conduct = this.convertValues(source["code_of_conduct"], CodeOfConduct);
	        this.default_branch = source["default_branch"];
	        this.master_branch = source["master_branch"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.pushed_at = this.convertValues(source["pushed_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.html_url = source["html_url"];
	        this.clone_url = source["clone_url"];
	        this.git_url = source["git_url"];
	        this.mirror_url = source["mirror_url"];
	        this.ssh_url = source["ssh_url"];
	        this.svn_url = source["svn_url"];
	        this.language = source["language"];
	        this.fork = source["fork"];
	        this.forks_count = source["forks_count"];
	        this.network_count = source["network_count"];
	        this.open_issues_count = source["open_issues_count"];
	        this.stargazers_count = source["stargazers_count"];
	        this.subscribers_count = source["subscribers_count"];
	        this.watchers_count = source["watchers_count"];
	        this.size = source["size"];
	        this.auto_init = source["auto_init"];
	        this.parent = this.convertValues(source["parent"], Repository);
	        this.source = this.convertValues(source["source"], Repository);
	        this.organization = this.convertValues(source["organization"], Organization);
	        this.permissions = source["permissions"];
	        this.allow_rebase_merge = source["allow_rebase_merge"];
	        this.allow_squash_merge = source["allow_squash_merge"];
	        this.allow_merge_commit = source["allow_merge_commit"];
	        this.topics = source["topics"];
	        this.license = this.convertValues(source["license"], License);
	        this.private = source["private"];
	        this.has_issues = source["has_issues"];
	        this.has_wiki = source["has_wiki"];
	        this.has_pages = source["has_pages"];
	        this.has_projects = source["has_projects"];
	        this.has_downloads = source["has_downloads"];
	        this.license_template = source["license_template"];
	        this.gitignore_template = source["gitignore_template"];
	        this.archived = source["archived"];
	        this.team_id = source["team_id"];
	        this.url = source["url"];
	        this.archive_url = source["archive_url"];
	        this.assignees_url = source["assignees_url"];
	        this.blobs_url = source["blobs_url"];
	        this.branches_url = source["branches_url"];
	        this.collaborators_url = source["collaborators_url"];
	        this.comments_url = source["comments_url"];
	        this.commits_url = source["commits_url"];
	        this.compare_url = source["compare_url"];
	        this.contents_url = source["contents_url"];
	        this.contributors_url = source["contributors_url"];
	        this.deployments_url = source["deployments_url"];
	        this.downloads_url = source["downloads_url"];
	        this.events_url = source["events_url"];
	        this.forks_url = source["forks_url"];
	        this.git_commits_url = source["git_commits_url"];
	        this.git_refs_url = source["git_refs_url"];
	        this.git_tags_url = source["git_tags_url"];
	        this.hooks_url = source["hooks_url"];
	        this.issue_comment_url = source["issue_comment_url"];
	        this.issue_events_url = source["issue_events_url"];
	        this.issues_url = source["issues_url"];
	        this.keys_url = source["keys_url"];
	        this.labels_url = source["labels_url"];
	        this.languages_url = source["languages_url"];
	        this.merges_url = source["merges_url"];
	        this.milestones_url = source["milestones_url"];
	        this.notifications_url = source["notifications_url"];
	        this.pulls_url = source["pulls_url"];
	        this.releases_url = source["releases_url"];
	        this.stargazers_url = source["stargazers_url"];
	        this.statuses_url = source["statuses_url"];
	        this.subscribers_url = source["subscribers_url"];
	        this.subscription_url = source["subscription_url"];
	        this.tags_url = source["tags_url"];
	        this.trees_url = source["trees_url"];
	        this.teams_url = source["teams_url"];
	        this.text_matches = this.convertValues(source["text_matches"], TextMatch);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	

}

export namespace main {
	
	export class ScorpionSettings {
	    transparency: boolean;
	    display_cards: boolean;
	
	    static createFrom(source: any = {}) {
	        return new ScorpionSettings(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.transparency = source["transparency"];
	        this.display_cards = source["display_cards"];
	    }
	}

}

