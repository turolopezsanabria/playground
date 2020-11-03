// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/'
      }
    ]
  }
}
