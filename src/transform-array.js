module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new TypeError();
  const ret = [];
  let isDiscardNext = false;
  let isDoubleNext = false;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (isDiscardNext) {
      isDiscardNext = false;
      continue;
    }

    if (isDoubleNext) {
      isDoubleNext = false;
      if (
        element !== "--discard-next" &&
        element !== "--discard-prev" &&
        element !== "--double-next" &&
        element !== "--double-prev"
      )
        ret.push(element);
    }

    switch (element) {
      case "--discard-next":
        isDiscardNext = true;
        break;
      case "--discard-prev":
        ret.pop();
        break;
      case "--double-next":
        isDoubleNext = true;
        break;
      case "--double-prev":
        if (index - 1 >= 0) ret.push(arr[index - 1]);
        break;
      default:
        ret.push(element);
        break;
    }
  }
  return ret;
};
