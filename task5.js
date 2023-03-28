const express=require('express')
var app=express();
app.get("/hello",(req,res)=>{
    res.send("hello user")
})
app.get("/welcome",(req,res)=>{
    res.send("welcome user")
})
app.listen(3000)