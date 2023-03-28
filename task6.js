var express=require('express')
var app=express()
app.get("/getmethod",(req,res)=>{
    res.send("sucessfully get method")
})
app.post("/postmethod",(req,res)=>{
    res.send('successfully post method')
})
app.listen(3000)