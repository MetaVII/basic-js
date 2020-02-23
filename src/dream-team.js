module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = "";
  members.forEach(item => {
    if (typeof item === "string") {
      result += item.trim()[0].toUpperCase();
    }
  });
  return result
    .split("")
    .sort()
    .join("");
};
