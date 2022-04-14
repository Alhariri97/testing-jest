const theSum = (...num) => {
  return num.reduce((a, b) => a + b, 0);
};

module.exports = theSum;
