let express=require('express') 
var app=express()
app.all("/student",(req,res)=>{
    res.send("welcome student")
})
app.listen(3000)