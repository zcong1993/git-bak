const download = require('./download')
const { getRepos } = require('./github')
const gitusername = require('./git-user')
const GitBakError = require('./git-bak-error')

module.exports = async ({
  username = gitusername,
  dest,
  page,
  perPage
} = {}) => {
  if (!dest) {
    throw new GitBakError('dest path is required!')
  }
  const repos = await getRepos(username, page, perPage)
  const jobs = Array.from(repos, repo => download(repo.full_name, dest + '/' + repo.name))

  return Promise.all(jobs)
}
