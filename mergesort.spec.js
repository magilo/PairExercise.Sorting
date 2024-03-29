describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]]);
    expect(split([38, 27, 43, 3, 9, 82, 10])).toEqual([[38, 27, 43, 3], [9, 82, 10]])
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6])
    expect(merge([4, 5, 6, 7], [1, 2, 8])).toEqual([1, 2, 4, 5, 6, 7, 8])
  });
});

describe('Merge Sort function', function () {
  beforeEach(function () {
    spyOn(window, 'mergeSort').and.callThrough();
  })
  afterEach(function () {
    window.mergeSort.calls.reset();
  })
  it('is able to sort an array', function () {
    expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82])
    expect(window.mergeSort.calls.count()).toBeGreaterThan(0);
  })
  // it('calls mergeSort', function () {
  //   expect(window.mergeSort.calls.count()).toBeGreaterThan(0);
  // })

})
