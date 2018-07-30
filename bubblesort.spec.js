describe('Bubble Sort', function(){
  var array;
  beforeEach(function() {
    array = [];
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single-item array', function() {
    array.push(7);
    expect(bubbleSort(array)).toEqual([7]);
  });

  it('handles unsorted array with multiple items', function() {
    array = [1, 5, 7, 2, 10, 9, 8, 3, 4, 6];
    expect(bubbleSort(array)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it('uses a separate swap function to handle swapping elements and it swaps the appropriate number of times', function() {
    spyOn(window, 'swap').and.callThrough();
    array = [1, 5, 7, 2, 10, 9, 8, 3, 4, 6];
    bubbleSort(array);
    expect(window.swap.calls.count()).toEqual(19);
    expect(window.swap).toHaveBeenCalled();
  })
});
