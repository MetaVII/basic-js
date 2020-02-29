const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RATE = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  const samActFloat = parseFloat(sampleActivity);
  if (isNaN(samActFloat) || samActFloat <= 0 || samActFloat > 15) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / samActFloat) / RATE);
};
