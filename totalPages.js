const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems === null || arrayItems === undefined) {
    return undefined
  }
  if (rowsPerPage === null||rowsPerPage === undefined||rowsPerPage === 0) {
    return 1
  }
  arrayItems = arrayItems.length
  if (arrayItems % rowsPerPage !== 0) {
    return Math.ceil(arrayItems/rowsPerPage)
  }
  if (arrayItems % rowsPerPage === 0) {
    return arrayItems/rowsPerPage
  }
}
console.log(totalPages(null,20))
module.exports = totalPages
