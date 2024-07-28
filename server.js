const express = require ("express");
const app=express();
const port = 8080;

app.get("/",(req, res)=>{
    res.send("hello world");
});

app.get("/goodbye",(req, res)=>{
    res.send("<h1>goodbye world</h1>")
});

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
});
 