const { expect, beforeAll, afterAll, beforeEach } = require("@jest/globals");
const sayHi = require("../js-Files/sayhi");

sayHi();

test("should ", () => {
  expect(sayHi()).toBe("hello from me");
});

// beforeAll runs befor all tests
beforeAll(() => {
  //connect to Database
  //empty testing table
  //add dummy data for testing
  //
});
// afterAll runs after all tests
afterAll(() => {
  //clean data Databse
  //clean cache
});

// beforeEach runs befor every test you have
