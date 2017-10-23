const fs = require('fs')
const template = fs.readFileSync('src/public/index.html')

module.exports = function () {
  this.render = config => {
    return template.toString()
      .replace(/{{jeffs}}/, config.data.map((jeff, i) => {
        return getJeffs(jeff)
      }).join('')
    )
  }
}

const getJeffs = (jeff) => {
  return `<img src="jeffs/${jeff}" class="jeff-small">`
}
