const server=require('http');
const fs=require("fs");
const url=require('url')
const myServer=server.createServer((req,res)=>{
    if(req.url==='/favicon.ico') return res.end();
    const log=`${Date.now()}:${req.url}:New Request Recieved\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
    switch(myUrl.pathname){
        case "/":
            res.end("HomePage");
            break;
        case "/about":
            res.end(`I am ${myUrl.query.myName}`);
            break;
        default:
            res.end('404 not found');
    }

    })
});

myServer.listen(8000,()=>{
    console.log("Server Started");
})