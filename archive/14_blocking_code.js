const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.end("Home Page");
    } else if (req.url == "/about") {
      // BLOCKING CODE!!! (nested loop)
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
          console.log(`${i} ${j}`);
        }
      }
      res.end("About Page");
    } else {
      res.end("Error Page");
    }
  });
  
  server.listen(5000, () => {
    console.log("Server is listening on port 5000....");
  });
  // Everyone must now wait for /about to load if someone tries to access it
  // before they can use any page of the site