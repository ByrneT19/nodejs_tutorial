const { readFile, writeFile } = require("fs").promises;
// The below 3 variables can all be replaced by calling .promises on the above module
// then use readFile and writeFile instead of readFilePromise and writeFilePromise
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    // originally readFilePromise
    const first = await readFile("./archive/content/first.txt", "utf-8");
    // originally readFilePromise
    const second = await readFile("./archive/content/second.txt", "utf-8");
    // originally writeFilePromise
    await writeFile(
      "./archive/content/result_mind_grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// THE ORIGINAL CODE - A promise method, this was then tidied up to create the above code

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./archive/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
