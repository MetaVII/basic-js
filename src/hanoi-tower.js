module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  ret = {};
  ret.turns = Math.pow(2, disksNumber) - 1;
  ret.seconds = turnsSpeed / ret.turns / 60 / 60;
  return ret;
};
