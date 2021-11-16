describe("On min element of arr", () => {
  it("should return min element of [4,5,6]", () => {
    expect(minElementOfArr([4, 5, 6])).to.equal(4);
  });
  it("should return min element of [1,2,3]", () => {
    expect(minElementOfArr([1, 2, 3])).to.equal(1);
  });
  it("should return min element of [0,5,6]", () => {
    expect(minElementOfArr([0, 5, 6])).to.equal(0);
  });
});

describe("On max element of arr", () => {
  it("should return max element of [4,5,6]", () => {
    expect(maxElementOfArr([4, 5, 6])).to.equal(6);
  });
  it("should return max element of [1,2,3]", () => {
    expect(maxElementOfArr([1, 2, 3])).to.equal(3);
  });
  it("should return max element of [0,5,6]", () => {
    expect(maxElementOfArr([0, 5, 6])).to.equal(6);
  });
});

describe("On index of the min element of an array", () => {
  it("should return min index of [5,4,6]", () => {
    expect(findMinIndexOfArr([5, 4, 6])).to.equal(1);
  });
  it("should return min index of [1,2,3]", () => {
    expect(findMinIndexOfArr([1, 2, 3])).to.equal(0);
  });
  it("should return min index of [0,5,6]", () => {
    expect(findMinIndexOfArr([0, 5, 6])).to.equal(0);
  });
});

describe("On index of the max element of an array", () => {
  it("should return max index of [5,4,6,8]", () => {
    expect(findMaxIndexOfArr([5, 4, 6, 8])).to.equal(3);
  });
  it("should return max index of [1,2,3]", () => {
    expect(findMaxIndexOfArr([1, 2, 3])).to.equal(2);
  });
  it("should return max index of [0,5,6]", () => {
    expect(findMaxIndexOfArr([0, 5, 6])).to.equal(2);
  });
});

describe("On sum of odd indexed elements of an array", () => {
  it("should return sum max indexes of [5,4,6,8]", () => {
    expect(sumOfOddIndexes([5, 4, 6, 8])).to.equal(12);
  });
  it("should return sum max indexes of [1,2,3,18]", () => {
    expect(sumOfOddIndexes([1, 2, 3, 18])).to.equal(20);
  });
  it("should return sum max indexes of [0,5,6,1,2,3]", () => {
    expect(sumOfOddIndexes([0, 5, 6, 1, 2, 3])).to.equal(9);
  });
});

describe("On revers arr", () => {
  it("should return reverse [1,2,3,4,5,6,7] ", () => {
    expect(reverseArr([1, 2, 3, 4, 5, 6, 7])).to.be.equal("7,6,5,4,3,2,1");
  });
  it("should return reverse [7,6,5,4,3]", () => {
    expect(reverseArr([7, 6, 5, 4, 3])).to.equal("3,4,5,6,7");
  });
});

describe("On count the number of odd elements in an array", () => {
  it("should return count odd elements[5,4,6,8]", () => {
    expect(numOfOddElements([5, 4, 6, 8])).to.equal(1);
  });
  it("should return count odd elements [1,2,3,18]", () => {
    expect(numOfOddElements([1, 2, 3, 18])).to.equal(2);
  });
  it("should return count odd elements[0,5,6,1,2,3]", () => {
    expect(numOfOddElements([0, 5, 6, 1, 2, 3])).to.equal(3);
  });
});

describe("On swap the first and second half of the array, for example, for array 1 2 3 4, the result is 3 4 1 2", () => {
  it("should return count odd elements[5,4,6,8]", () => {
    expect(swapElemOfArr([5, 4, 6, 8])).to.eql([6, 8, 5, 4]);
  });
  it("should return count odd elements [1,2,3,18]", () => {
    expect(swapElemOfArr([1, 2, 3, 18])).to.eql([3, 18, 1, 2]);
  });
  it("should return count odd elements[0,5,6,1,2,3]", () => {
    expect(swapElemOfArr([0, 5, 6, 1, 2, 3])).to.eql([1, 2, 3, 0, 5, 6]);
  });
});

describe("On bubble", () => {
  it("should return arr [4,5,6,8]", () => {
    expect(bubble([5, 4, 6, 8])).to.eql([4, 5, 6, 8]);
  });
  it("should return arr [1,2,3,18]", () => {
    expect(bubble([1, 18, 3, 2])).to.eql([1, 2, 3, 18]);
  });
  it("should return arr [0,1,2,3,5,6]", () => {
    expect(bubble([0, 5, 6, 1, 2, 3])).to.eql([0, 1, 2, 3, 5, 6]);
  });
});

describe("On select", () => {
  it("should return arr [4,5,6,8]", () => {
    expect(select([5, 4, 6, 8])).to.eql([4, 5, 6, 8]);
  });
  it("should return arr [1,2,3,18]", () => {
    expect(select([1, 18, 3, 2])).to.eql([1, 2, 3, 18]);
  });
  it("should return arr [0,1,2,3,5,6]", () => {
    expect(select([0, 5, 6, 1, 2, 3])).to.eql([0, 1, 2, 3, 5, 6]);
  });
});

describe("On insert", () => {
  it("should return arr [4,5,6,8]", () => {
    expect(insert([5, 4, 6, 8])).to.eql([4, 5, 6, 8]);
  });
  it("should return arr [1,2,3,18]", () => {
    expect(insert([1, 18, 3, 2])).to.eql([1, 2, 3, 18]);
  });
  it("should return arr [0,1,2,3,5,6]", () => {
    expect(insert([0, 5, 6, 1, 2, 3])).to.eql([0, 1, 2, 3, 5, 6]);
  });
});
