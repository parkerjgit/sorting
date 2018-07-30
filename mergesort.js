function split(wholeArray) {
  let midPoint = Math.floor(wholeArray.length / 2);
  let first = wholeArray.slice(0, midPoint);
  let second = wholeArray.slice(midPoint);
  return [first, second];
}

function merge(array1, array2) {
  let resultArr = [];
  let i = 0;
  let j = 0;
  while(i < array1.length && j < array2.length) {
    let iCurrent = array1[i];
    let jCurrent = array2[j];
    if(iCurrent < jCurrent) {
      resultArr.push(iCurrent);
      i++;
    }
    else {
      resultArr.push(jCurrent);
      j++;
    }
  }
  if(i < array1.length) {
    return resultArr.concat(array1.slice(i));
  }
  else if(j < array2.length) {
    return resultArr.concat(array2.slice(j));
  }
  return resultArr;
}

function mergeSort(array) {

  if (array.length < 2) {
    return array;
  }

  let left, right;
  [left, right] = split(array);

  return merge(mergeSort(left), mergeSort(right));
}
