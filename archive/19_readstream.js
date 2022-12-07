const { createReadStream } = require("fs");

const stream = createReadStream("./archive/content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// default 64kb
// last buffer - remainder of data to be sent that doesn't hit the high water mark

// highWaterMark - controls size of each chunk of data the read stream sends out, i.e. set it to 90000
// const stream = createReadStream('/content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('/content/big.txt', {emcoding: 'utf8'})

// EXAMPLE OF HOW TO USE THESE...
// const stream = createReadStream("./archive/content/big.txt", {
//   highWaterMark: 90000,
//   encoding: "utf8",
// });


// handles the read stream
stream.on("data", (result) => {
  console.log(result);
});

// handles any errors in talking to the server/read stream
stream.on("error", (err) => console.log(err));
