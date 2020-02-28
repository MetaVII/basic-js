module.exports = function repeater(str, options) {
    const {repeatTimes = 0, separator = '+', addition, additionRepeatTimes = 0, additionSeparator = '|'} = options;
    let ret = '';
    for (let i = 0; i < repeatTimes; i++) {
        ret += str;
        if (addition) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                ret += addition;
                if (j < additionRepeatTimes - 1) {
                    ret += additionSeparator;
                }
            }
        }
        if (i < repeatTimes - 1) {
            ret += separator;
        }
    }
    return ret;
};
  