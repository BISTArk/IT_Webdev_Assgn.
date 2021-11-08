const http = require('http')

http.createServer((req,res)=>{
    res.write("HALLO!! Welcome to Hello World!!");
    res.end();
}).listen(9000);