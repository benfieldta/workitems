module.exports = function (repo) {
    return {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        owner: {
            login: repo.owner.login,
            id: repo.owner.id,
            avatar_url: repo.owner.avatar_url,
            html_url: repo.owner.html_url,
            repos_url: repo.owner.repos_url,
            type: repo.owner.type,
        },
        description: repo.description,
        private: repo.private,
        html_url: repo.html_url,
        forks_url: repo.forks_url,
        // teams, hooks, and issue events url?
        assignees_url: repo.assignees_url,
        commits_url: repo.commits_url,
        git_commits_url: repo.git_commits_url,
        // issues_url: repo.issues_url,
        // pulls_url: repo.pulls_url,
        labels_url: repo.labels_url,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        // pushed_at: repo.pushed_at,
        // git_url: repo.git_url,
        clone_url: repo.clone_url,
        homepage: repo.homepage,
        open_issues_count: repo.open_issues_count,
        default_branch: repo.default_branch,
        forks: repo.forks
    } 
}