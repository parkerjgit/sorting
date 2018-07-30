describe('Split Array function', function() {
  let wholeArrayEven;
  let wholeArrayOdd;
  let resultEven;
  let resultOdd;
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
  })
})
