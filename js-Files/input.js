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
  return name;
}

module.exports = filter;
