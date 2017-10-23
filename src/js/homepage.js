const fs = require('fs')
const template = fs.readFileSync('src/public/html/index.html')
const footer = fs.readFileSync('src/public/html/footer.html')
const header = fs.readFileSync('src/public/html/header.html')

module.exports = function () {
  this.render = config => {
    return template.toString()
      .replace(/{{jeffs}}/, config.data.map((jeff, i) => {
        return getJeffs(jeff)
      }).join(''))
      .replace(/{{footer}}/, footer)
      .replace(/{{header}}/, header)
  }
}

const getJeffs = (jeff) => {
  return `<img src="jeffs/${jeff}" class="jeff-small">`
}
