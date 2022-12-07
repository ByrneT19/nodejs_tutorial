const { readFile } = require("fs");

console.log("satrted a first task");
// CHECK FILE PATH
// This code block will run after the outer code as it is async
readFile("../archive/content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");