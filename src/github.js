const axios = require('axios')
const GitBakError = require('./git-bak-error')
const event = require('./event')

exports.getRepos = async ({
  username,
  page = 2,
  perPage = 1
}) => {
  let repos = []
  event.emit('status', 'get repos list...')
  try {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`)
    repos = res.data
  } catch (err) {
    throw new GitBakError(err.response.data.message)
  }

  return repos
}
