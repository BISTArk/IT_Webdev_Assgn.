const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('hello.txt','utf-8',(err,data)=>{
        if(err){
            console.log("No such file exist!");
        }
        res.write(data);
        res.end();
    })
}).listen(9001);