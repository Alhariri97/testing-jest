function filter(name) {
  if (name === undefined) {
    name = "Unkown";
  }
  if (name.startsWith(" ") || name.endsWith(" ")) {
    name = name.trim();
  }
  if (name.length > 10) {
    name = name.substring(0, 10);
  }
  if (name.startsWith("_")) {
    name = name.substring(1);
  }
  // if (nama === "hello") {
  //   throw Error("This name is not Allowed");
  // }
  return name;
}

module.exports = filter;

// npm test -- --coverage
