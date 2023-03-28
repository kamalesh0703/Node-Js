let express=require('express')
var app=express()
app.use("/student/:id([0-9]{10})/:name([a-z]{5})",(req,res)=>{
    res.send(`id ${req.params.id} name:${req.params.name}`)
})
app.listen(3000)