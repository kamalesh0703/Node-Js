let express=require('express')
var app=express()
app.all("/student/:id",(req,res)=>{
    res.send(`welcome student your id is ${req.params.id}`)
})
app.listen(3000)