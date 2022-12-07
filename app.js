var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // ORIGINAL CODE - THIS JUST TRIES TO SEND A BIG FILE THRU THE SERVER
    // const text = fs.readFileSync("./archive/content/big.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream("./archive/content/big.txt", "utf8");
    fileStream.on("open", () => {
      // .pipe allows you to recieve and write the file in chunks rather than trying to transfer a massive file in one go
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
