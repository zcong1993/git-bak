const event = require('./event')

module.exports = err => {
  if (err.name === 'GitBakError') {
    event.emit('error', err.message)
  } else {
    console.error(err)
  }
}
