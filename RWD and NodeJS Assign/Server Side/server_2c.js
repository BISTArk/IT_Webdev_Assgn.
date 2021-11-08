const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    let myPath = url.parse(req.url).pathname;

    if(myPath === '/')myPath = '/home';
    fs.readFile(`./htmls${myPath}.html`, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(9002);
