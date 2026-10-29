const http=require('http'),fs=require('fs'),path=require('path');
http.createServer((req,res)=>{const p=path.join(__dirname,'index.html');res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(fs.readFileSync(p));}).listen(3000,'127.0.0.1',()=>console.log('BBT preview http://127.0.0.1:3000'));

