const { expect } = require("@jest/globals");
const sayHello = require("../js-Files/mock.js");

describe("Mock functon tests", () => {
  it("return hello agmad", () => {
    let mocker = jest.fn(sayHello);
    expect(mocker("Ahmad")).toBe("Hello Ahmad");
    expect(mocker("Abdul")).toBe("Hello Abdul");
    expect(mocker("Osama")).toBe("Hello Osama");
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledWith("Abdul");
    expect(mocker).toHaveBeenLastCalledWith("Osama");
    expect(mocker).toHaveBeenCalledTimes(3);
  });
});
