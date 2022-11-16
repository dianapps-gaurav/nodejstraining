const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("hello from http server");
    res.end();
}).listen(8080);







console.log(__dirname);
console.log(__filename);
const read = fs.createReadStream('child.js');
read.on("data",(chunk) =>{
    console.log(chunk.toString());
})
