function split(wholeArray) {
  let midPoint = Math.floor(wholeArray.length / 2);
  let first = wholeArray.slice(0, midPoint);
  let second = wholeArray.slice(midPoint);
  return [first, second];
}
