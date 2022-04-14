// const { expect } = require("@jest/globals");
// const data = require("../js-Files/make-match");
// here I'll be creating the matcher such as toBeGreaterThan or less than and so on... :D)

const { expect, it } = require("@jest/globals");
const { strict } = require("yargs");

expect.extend({
  toBeAbdul(recived, traget) {
    let pass = recived > traget;
    if (pass) {
      return {
        message: () => `expected ${recived} to Be greater than ${traget}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: expected ${recived} to Be greater than ${traget}`,
        pass: false,
      };
    }
  },
});

it("Check if number is larger than number", () => {
  expect(5).toBeAbdul(2);
});

expect.extend({
  toBeBetween(recived, start, end) {
    let pass = recived > start && recived < end;
    if (pass) {
      return {
        message: () => `expected ${recived} to be between ${start}and ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: expected ${recived} to be between ${start} and ${end}`,
        pass: false,
      };
    }
  },
});

it("check if numb between two nums", () => {
  expect(3).toBeBetween(1, 4);
});

// expect.anything()

describe("expect.anything() method", () => {
  let a;
  let b = null;
  it("Number ", () => {
    expect(3).toEqual(expect.anything());
  });
  it("Array ", () => {
    expect([2, 3, 4]).toEqual(expect.anything());
  });
  it("String ", () => {
    expect("a").toEqual(expect.anything());
  });
  it("Object ", () => {
    expect({ A: 1, B: 2 }).toEqual(expect.anything());
  });
  it("Function ", () => {
    expect(() => {}).toEqual(expect.anything());
  });
  it("Undefined It will fail ", () => {
    expect(a).toEqual(expect.anything());
  });
  it("Null It will fail ", () => {
    expect(b).toEqual(expect.anything());
  });
});

// expect.any(cunestructor)
describe("expect.anything() method", () => {
  it("Number ", () => {
    expect(3).toEqual(expect.any(Number));
  });
  it("Array ", () => {
    expect([2, 3, 4]).toEqual(expect.any(Array));
  });
  it("String ", () => {
    expect("a").toEqual(expect.any(String));
  });
  it("Object ", () => {
    expect({ A: 1, B: 2 }).toEqual(expect.any(Object));
  });
  it("Function ", () => {
    expect(() => {}).toEqual(expect.any(Function));
  });
});

it.only("if the array containes some elements ", () => {
  let array = [1, 2, 3, 4, 5];
  expect(array).toEqual(expect.arrayContaining([1, 2, 3]));
});
