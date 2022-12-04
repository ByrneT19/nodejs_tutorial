// Async basically works the same way as callback functions,
// i.e. it needs the function/content to be available before it will do anything
const { readFile, writeFile } = require("fs");
console.log('start');
readFile(
  "./content/first.txt",
  "utf8",
  //This is the callback function
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      writeFile(
        "./content/result-async.txt",
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log('done with this task');
        }
      );
    });
  }
);
console.log('starting next task');