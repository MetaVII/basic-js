module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(element => {
    result += element.filter(i => i === "^^").length;
  });
  return result;
};
