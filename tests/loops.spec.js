describe("On find the sum of even numbers and their number in the range from 1 to 99", () => {
  it("should return sum and count", () => {
    expect(sumAndCount(1)).to.equal("sum = 2450, count = 49");
  });
  it("should return start value can't be 0 or less", () => {
    expect(sumAndCount(-1)).to.equal("start value can't be 0 or less");
  });
  it("should return start value can't be 0 or less", () => {
    expect(sumAndCount(0)).to.equal("start value can't be 0 or less");
  });
});

describe("On check if the number is prime?", () => {
  it("should return prime number", () => {
    expect(isSimpleNumber(2)).to.equal("Это простое число");
  });
  it("should return not prime number ", () => {
    expect(isSimpleNumber(8)).to.equal("Это не простое число");
  });
  it("should return prime number", () => {
    expect(isSimpleNumber(0)).to.equal("Это простое число");
  });
});

describe("On find root,sequential selection option", () => {
  it("should return must be > 0", () => {
    expect(findRoot(-2)).to.equal("must be > 0");
  });
  it("should return root of 25 ", () => {
    expect(findRoot(25)).to.equal(5);
  });
  it("should return root of 0", () => {
    expect(findRoot(0)).to.equal(0);
  });
});

describe("On find root,binary search method", () => {
  it("should return must be > 0", () => {
    expect(findRoot2(-2)).to.equal("must be > 0");
  });
  it("should return root of 25 ", () => {
    expect(findRoot2(25)).to.equal(5);
  });
  it("should return root of 0", () => {
    expect(findRoot2(0)).to.equal(0);
  });
});

describe("On find factorial", () => {
  it("should return value must be > 1", () => {
    expect(findFactorial(-2)).to.equal("value must be > 1");
  });
  it("should return factorial of 100 ", () => {
    expect(findFactorial(100)).to.equal(9);
  });
  it("should return value must be > 1", () => {
    expect(findFactorial(0)).to.equal("value must be > 1");
  });
});

describe("On calculate the sum of digits of a given number", () => {
  it("should return value must be > 0", () => {
    expect(sumOfNum(-2)).to.equal("value must be > 1");
  });
  it("should return sum of 123 ", () => {
    expect(sumOfNum(123)).to.equal(6);
  });
  it("should return value must be > 0", () => {
    expect(sumOfNum(0)).to.equal("value must be > 1");
  });
});

describe("On revers number", () => {
  it("should return value must be >= 10", () => {
    expect(reversNumbers(-2)).to.equal("value must be >= 10");
  });
  it("should return revers 123 ", () => {
    expect(reversNumbers(1234567)).to.be.equal("7654321");
  });
  it("should return value must be >= 10", () => {
    expect(reversNumbers(0)).to.equal("value must be >= 10");
  });
});
