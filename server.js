const http = require('http');
 
http.createServer((req,res) =>{
    if(req.url == "/"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({message:"hello world"}));
        res.end();
    }

   else if(req.url == "/contact"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({message:"hello worl"}));
        res.end();
    }
    else if(req.url == '/about'){
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.write(JSON.stringify({message:"hello wor"}));
        res.end();
    }

}).listen(8080,()=>{
    console.log("server is listening at port 8080");
});

