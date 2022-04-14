function copyArrayAndDoStuff(list, instructions) {
  const output = [];

  for (let i = 0; i < list.length; i++) {
    output.push(instructions(list[i]));
  }

  return output;
}

module.exports = { copyArrayAndDoStuff };
