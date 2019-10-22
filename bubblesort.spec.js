xdescribe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles array of one number', function () {
    expect(bubbleSort([-1])).toEqual([-1])
  })

  it('handles array of same numbers', function () {
    expect(bubbleSort([0, 0, 0])).toEqual([0, 0, 0])
  })

  it('returns array of already sorted numbers in same order', function () {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([-7, 42, 100])).toEqual([-7, 42, 100])
  })

  it('handles array of unsorted numbers', function () {
    expect(bubbleSort([100, 38, -100, -4, 7, 10])).toEqual([-100, -4, 7, 10, 38, 100])
  })
});

