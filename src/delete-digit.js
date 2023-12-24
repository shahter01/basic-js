const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = String(n).split('').map(Number);
  return Math.max(...array.map((el,i) => {
    let copyArray = array.slice();
    copyArray.splice(i,1);
    return Number(copyArray.join(''))
  }))
}

module.exports = {
  deleteDigit
};
