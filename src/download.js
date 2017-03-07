const download = require('download-git-repo')
const event = require('./event')

module.exports = (repo, dest) => {
  return new Promise((resolve, reject) => {
    download(repo, dest, err => {
      if (err) {
        return reject(err)
      }
      event.emit('download', repo)
      return resolve(repo)
    })
  })
}
