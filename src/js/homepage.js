const fs = require('fs')
const template = fs.readFileSync('src/public/html/index.html')
const footer = fs.readFileSync('src/public/html/footer.html')
const header = fs.readFileSync('src/public/html/header.html')
const jeffHTML = fs.readFileSync('src/public/html/jeff.html')
const productHTML = fs.readFileSync('src/public/html/product.html')
const data = require('../data/merchandise.json')

module.exports = function () {
  this.render = config => {
    return template.toString()
      .replace(/{{jeffs}}/, config.data.map((jeff, i) => {
        return getJeffs(jeff)
      }).join(''))
      .replace(/{{footer}}/, footer)
      .replace(/{{header}}/, header)
      .replace(/{{merchandise}}/, getMerchandise())
  }
}

const getJeffs = (jeff) => {
  return jeffHTML.toString()
    .replace(/{{jeff}}/, jeff)
    .replace(/{{jeffName}}/, jeff.split('.')[0])
}

const getMerchandise = () => {
  return data.merchandise.map((data, i) => {
    return productHTML.toString()
      .replace(/{{url}}/, data.link)
      .replace(/{{name}}/, data.name)
      .replace(/{{img}}/, data.img)
      .replace(/{{price}}/, data.price)
  }).join('')
}
