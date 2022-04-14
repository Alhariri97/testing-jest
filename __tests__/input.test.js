const { expect } = require("@jest/globals");
const filter = require("../js-Files/input");

describe("Validate The Input Field", () => {
  test("Check if the input is empty ", () => {
    expect(filter()).toBe("Unkown");
  });
  test("test for spaces (start and end) ", () => {
    expect(filter(" Abdul ")).toBe("Abdul");
  });
  test("test for the name to be not more than 10 ", () => {
    expect(filter("Abdul Abdul Abdul Abdul")).toBe("Abdul Abdu");
  });
  test("Check if Name not starts with Undesocre ", () => {
    expect(filter("_Abdul")).toBe("Abdul");
  });
});
