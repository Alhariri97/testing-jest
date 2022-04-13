const { copyArrayAndDoStuff } = require("../main");

test("instrllluction return values are pushed to the new  array", () => {
  // arrange
  const nums = [1, 2, 3];
  const doubleNum = (num) => num * 2;
  // act
  const actual = copyArrayAndDoStuff(nums, doubleNum);
  // assert
  const expected = [2, 4, 6];
  expect(actual).toEqual(expected);
});
