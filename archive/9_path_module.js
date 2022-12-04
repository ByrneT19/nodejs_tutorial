//Originally wasn't in ./archive - hence archive paths still present
const path = require("path");

console.log(path.sep);

//Using join if you add extra slashes then you will get the normalised path anyway
const filePath = path.join("/archive/", "content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(
  __dirname,
  "archive",
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolute);
