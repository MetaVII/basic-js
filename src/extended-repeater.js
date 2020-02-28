module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|"
  } = options;

  let ret = "";

  for (let i = 0; i < repeatTimes; i++) {
    ret += str;

    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        ret += addition;
        j < additionRepeatTimes - 1 ? (ret += additionSeparator) : null;
      }
    }

    i < repeatTimes - 1 ? (ret += separator) : null;
  }

  return ret;
};
