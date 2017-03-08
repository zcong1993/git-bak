const path = require('path')
const download = require('./download')
const { getRepos } = require('./github')
const gitusername = require('./git-user')
const GitBakError = require('./git-bak-error')

module.exports = async ({
  username = gitusername,
  dest,
  page,
  perPage,
  all,
  skipFork
} = {}) => {
  if (!dest) {
    throw new GitBakError('dest path is required!')
  }
  if (all) {
    perPage = 10000
    page = 1
  }
  let repos = await getRepos({ username, page, perPage })
  if (skipFork) {
    repos = repos.filter(repo => !repo.fork)
  }
  const jobs = Array.from(repos, repo => download(repo.full_name, path.resolve(process.cwd(), dest, repo.name)))

  return Promise.all(jobs)
}
