const { expect } = require("@jest/globals");
const data = require("../js-Files/matchers");

describe("data ", () => {
  it("Check if the Attay have six Element in it or not ", () => {
    expect(data.length).toBe(6);
  });
  it("Check if the string has a spesfice length", () => {
    expect("data").toHaveLength(4);
  });
  it("Check if the array's length ", () => {
    expect(data).toHaveLength(6);
  });

  it("Check if the String contains a D ", () => {
    expect("data D").toContain("D");
  });
  it("Check if the array conains number 6", () => {
    expect(data).toContain(6);
    expect(data).not.toContain(20);
  });
  it("Check if the array has a number 9 loop js meathod", () => {
    for (let i = 0; i < data.length; i++) {
      expect(data[i]).not.toBe(9);
    }
  });
  it("check if all the elements in the array arr numbers 1st method", () => {
    for (let i = 0; i < data.length; i++) {
      expect(isNaN(data[i])).toBe(false);
    }
  });
  it("check if all the elements in the array arr numbers 2nd method", () => {
    for (let i = 0; i < data.length; i++) {
      expect(isNaN(data[i])).toBeFalsy();
    }
  });
  it("check if all the elements in the array arr numbers 3rd method", () => {
    for (let i = 0; i < data.length; i++) {
      expect(isNaN(data[i])).not.toBeTruthy();
    }
  });
  it("check if all the first elements Greater than ", () => {
    expect(data[1]).toBeGreaterThan(1);
  });
  it("check if all the first elements less than ", () => {
    expect(data[0]).toBeLessThan(2);
  });
  it("check if all the first elements Greather than or equal", () => {
    expect(data[0]).toBeGreaterThanOrEqual(1);
  });
});

describe(" General Matchers ", () => {
  let a;
  test("TobeUndefined", () => {
    expect(a).toBeUndefined();
  });
  test("To match Regex", () => {
    let string = "Hello there, this is Abdul :)";
    expect(string).toMatch(/Abdul/);
  });
  it("To Check the obj has a  proparity", () => {
    let obj = { name: "Abdul", age: 26 };
    expect(obj).toHaveProperty("name");
  });
  it("To Check the obj has a proparity + value", () => {
    let obj = { name: "Abdul", age: 26 };
    expect(obj).toHaveProperty("name", "Abdul");
  });
});
