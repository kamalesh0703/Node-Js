let express=require('express')
var app=express()
app.all("/student/:id/:name",(req,res)=>{
    res.send(`id ${req.params.id} name:${req.params.name}`)
})
app.listen(3000)