const { readFileSync, writeFileSync } = require("fs");
console.log('start');

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

//Below method will either create the file if it is not there or it will overwrite the file if it is there.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log('done with this task');
console.log('starting the next task');