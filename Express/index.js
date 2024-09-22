const express=require('express');

const app=express();
app.get('/',(req,res)=>{

    return res.send("Hello from HomePage");
});

app.get('/about',(req,res)=>{
    return res.send("Hello from about"+" hey "+req.query.myName);
});
// const myServer=server.createServer(app);

app.listen(8000,()=>{
    console.log("Server started");
})