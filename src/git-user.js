const parse = require('parse-git-config')
const gitConfigPath = require('git-config-path')

module.exports = parse.sync({ cwd: '/', path: gitConfigPath('global') }).user.name || ''
