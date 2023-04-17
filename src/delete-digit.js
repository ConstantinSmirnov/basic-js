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
  let nArr = n.toString().split('');
  let nArrLen = nArr.length;
  let test = [];

  for(let i = 0; i < nArrLen; i++) {
    let arrs = [...nArr];
    arrs.splice(i, 1)
    test.push(arrs.join(''));
}

  return  Math.max.apply(null, test);
}

module.exports = {
  deleteDigit
};
