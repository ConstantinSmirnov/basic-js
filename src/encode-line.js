const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const text = str.toLowerCase();
  let newStr = '';
  let count = 0;
  
  for (let i = 0; i < text.length; i++) {
    count++;
    if (text[i + 1] !== text[i]) {
        
      if (count == 1) {
          newStr += `${text[i]}`;
      } else {
          newStr += `${count}${text[i]}`;
      }
      
      count = 0;
      continue;
    }
  }
  
  return newStr;
}

module.exports = {
  encodeLine
};
