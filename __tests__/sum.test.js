const theSum = require("../sum");

test("Return the number", () => {
  expect(theSum(10)).toBe(10);
});

test(" 1 + 2 ", () => {
  expect(theSum(10, 20)).toBe(30);
});
