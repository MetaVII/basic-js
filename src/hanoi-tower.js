module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  ret = {};
  ret.turns = Math.pow(2, disksNumber) - 1;
  ret.seconds = ret.turns / (turnsSpeed / 3600);
  return ret;
};
