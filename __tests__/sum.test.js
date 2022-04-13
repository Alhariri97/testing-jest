const theSum = require("../sum");

describe("Test for numbers ", () => {
  describe("test for one or zero argumments", () => {
    test("My first test ", () => {
      expect(theSum(1)).toBe(1);
    });
    test("My first test ", () => {
      expect(theSum()).toBe(0);
    });
  });

  describe("test if two or three argg", () => {
    test("if the user pass two arrguments, return the sum of the two arrgumnets ", () => {
      expect(theSum(3, 2)).toBe(5);
    });
    test("My first test three  ", () => {
      expect(theSum(1, 2, 3)).toBe(6);
    });
  });

  describe("for more than two numbers ", () => {
    test("if the user pass two arrguments, return the sum of the two arrgumnets ", () => {
      expect(theSum(3, 2, 1, 4)).toBe(10);
    });
    test("if the user pass two arrguments, return the sum of the two arrgumnets ", () => {
      expect(theSum(3, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toBe(20);
    });
  });
});
