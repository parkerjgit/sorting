

describe('Split Array function', function() {
  beforeEach(function() {
    wholeArrayEven = [1,3,5,47,9,32,14,6,8,10];
    wholeArrayOdd = [1,3,5,63,7,34,9];
    resultEven = split(wholeArrayEven);
    resultOdd = split(wholeArrayOdd);
  });

  it('is return an array of two arrays', function() {
    expect(resultEven.length).toEqual(2);
    expect(resultOdd.length).toEqual(2);
  });

  it('is able to split an array into two halves', function() {
    expect(resultEven[0].length).toEqual(resultEven[1].length);
    expect(resultOdd[0].length + 1).toEqual(resultOdd[1].length);
  });

  it('returns the correct two arrays', function() {
    expect(resultEven).toEqual([[1,3,5,47,9],[32,14,6,8,10]]);
    expect(resultOdd).toEqual([[1,3,5],[63,7,34,9]]);
  });
});

describe('Merge function', function() {
  let sortedEven, sortedOdd;
  beforeEach(function() {
    sortedEven = [1,3,5,6,8,9,10,14,32,47];
    sortedOdd = [1,3,5,7,9,34,63];
  });

  it('merges two sorted arrays into one array', function() {
    let array1Even = [1,5,8,10,14];
    let array2Even = [3,6,9,32,47];
    let array1Odd = [1,7,34];
    let array2Odd = [3,5,9,63];
    expect(merge(array1Even, array2Even)).toEqual(sortedEven);
    expect(merge(array1Odd, array2Odd)).toEqual(sortedOdd);
  });

  it('merges two arrays with one or two elements correctly', function() {
    let singleArrayOne = [2];
    let singleArrayTwo = [5];
    let doubleArrayOne = [2,8];
    let doubleArrayTwo = [6,9];
    expect(merge(singleArrayOne, singleArrayTwo)).toEqual([2,5]);
    expect(merge(doubleArrayOne, doubleArrayTwo)).toEqual([2,6,8,9]);
    expect(merge(singleArrayOne, doubleArrayTwo)).toEqual([2,6,9]);
  });
});

describe('MergeSort function', function() {
  beforeEach(function() {
    wholeArrayEven = [1,3,5,47,9,32,14,6,8,10];
    wholeArrayOdd = [1,3,5,63,7,34,9];
    sortedEven = [1,3,5,6,8,9,10,14,32,47];
    sortedOdd = [1,3,5,7,9,34,63];
  })

  it('correctly sorts an array', function() {
    expect(mergeSort(wholeArrayEven)).toEqual(sortedEven);
    expect(mergeSort(wholeArrayOdd)).toEqual(sortedOdd);
  })
})
