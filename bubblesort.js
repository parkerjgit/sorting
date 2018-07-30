
function bubbleSort(array) {
  let didSort = true;
  if(array.length < 2) {
    return array;
  }
  while(didSort) {
    didSort = false;
    for(let i = 0; i < array.length; i++) {
      let current = array[i];
      let next = array[i + 1];
      if(next) {
        if(next < current) {
          swap(array, i, current, next);
          didSort = true;
        }
      }
    }
  }
  return array;
}

function swap(array, i, current, next) {
  let tempCurrent = next;
  array[i + 1] = current;
  array[i] = tempCurrent;
}
