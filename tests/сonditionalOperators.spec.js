describe("On a is even count a * b, otherwise a + b", () => {
  it("should mult", () => {
    expect(mult(2, 2)).to.equal(4);
  });
  it("should sum", () => {
    expect(mult(1, 5)).to.equal(6);
  });
  it("should return 0", () => {
    expect(mult(0, 0)).to.equal(0);
  });
  it("should return message", () => {
    expect(mult(-1, -2)).to.equal("Numbers must be >= 0");
  });
  it("should return message", () => {
    expect(mult(-1, 2)).to.equal("Numbers must be >= 0");
  });
  it("should return message", () => {
    expect(mult(1, -2)).to.equal("Numbers must be >= 0");
  });
});

describe("On determine which quarter the point with coordinates (x, y) belongs tochois quarter", () => {
  it("should return 1 quarter", () => {
    expect(findQuarter(3, 2)).to.equal("Первая четверть");
  });

  it("should return 2 quarter", () => {
    expect(findQuarter(1, -2)).to.equal("Вторая четверть");
  });
  it("should return 3 quarter", () => {
    expect(findQuarter(-1, -2)).to.equal("Третья четверть");
  });
  it("should return 4 quarter", () => {
    expect(findQuarter(-1, 2)).to.equal("Четвертая четверть");
  });
  it("should return cener", () => {
    expect(findQuarter(0, 0)).to.equal("Центр координат");
  });
});

describe("On find the sum of only positives of three numberssum only positive numbers", () => {
  it("should return 5", () => {
    expect(sumOfPosNum(3, 2, -2)).to.equal(5);
  });
  it("should return 4", () => {
    expect(sumOfPosNum(3, -1, 1)).to.equal(4);
  });
  it("should return 7", () => {
    expect(sumOfPosNum(-3, 2, 5)).to.equal(7);
  });
  it("should return 0", () => {
    expect(sumOfPosNum(-3, -2, -5)).to.equal(0);
  });
  it("should return 0", () => {
    expect(sumOfPosNum(3, -2, -5)).to.equal(0);
  });
  it("should return 0", () => {
    expect(sumOfPosNum(-3, 2, -5)).to.equal(0);
  });
  it("should return 0", () => {
    expect(sumOfPosNum(-3, -2, 5)).to.equal(0);
  });
  it("should return 10", () => {
    expect(sumOfPosNum(3, 2, 5)).to.equal(10);
  });
  it("should return 0", () => {
    expect(sumOfPosNum(0, 0, 0)).to.equal(0);
  });
});

describe("On calculate the expression (max (a * b * c, a + b + c)) + 3", () => {
  it("should return 7", () => {
    expect(maxSumOrMult(2, 1, 1)).to.equal(7);
  });
  it("should return 6", () => {
    expect(maxSumOrMult(3, -1, 1)).to.equal(6);
  });
  it("should return 7", () => {
    expect(maxSumOrMult(-3, 2, 5)).to.equal(7);
  });
  it("should return -7", () => {
    expect(maxSumOrMult(-3, -2, -5)).to.equal(-7);
  });
  it("should return 33", () => {
    expect(maxSumOrMult(3, -2, -5)).to.equal(33);
  });
  it("should return 33", () => {
    expect(maxSumOrMult(-3, 2, -5)).to.equal(33);
  });
  it("should return 33", () => {
    expect(maxSumOrMult(-3, -2, 5)).to.equal(33);
  });
  it("should return 33", () => {
    expect(maxSumOrMult(3, 2, 5)).to.equal(33);
  });
  it("should return 0", () => {
    expect(sumOfPosNum(0, 0, 0)).to.equal(0);
  });
});

describe("On program for determining a student's assessment by his rating, based on the following rules", () => {
  it("should return F", () => {
    expect(studentGrade(3)).to.equal("F");
  });
  it("should return E", () => {
    expect(studentGrade(22)).to.equal("E");
  });
  it("should return D", () => {
    expect(studentGrade(50)).to.equal("D");
  });
  it("should return C", () => {
    expect(studentGrade(70)).to.equal("C");
  });
  it("should return B", () => {
    expect(studentGrade(80)).to.equal("B");
  });
  it("should return A", () => {
    expect(studentGrade(90)).to.equal("A");
  });
  it("should return incorrect grade", () => {
    expect(studentGrade(-1)).to.equal("incorrect grade");
  });
  it("should return incorrect grade", () => {
    expect(studentGrade(1)).to.equal("incorrect grade");
  });
});
