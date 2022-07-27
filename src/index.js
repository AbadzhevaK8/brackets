module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  bracketsConfig.forEach((val) => {
    brackets.push(val[0] + val[1]);
  });

  let myStr = str;

  while (myStr) {
    let tmpStr = myStr;
    brackets.forEach(function (item) {
      myStr = myStr.replace(item, '');
    });
    if (tmpStr === myStr) {
      return false;
    }
  }
  if (myStr === '') {
    return true;
  }
}
