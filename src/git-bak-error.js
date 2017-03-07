module.exports = class GitBakError extends Error {
  constructor(msg) {
    super(msg)
    this.name = this.constructor.name
  }
}
