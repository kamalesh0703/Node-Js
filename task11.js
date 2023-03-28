let express=require('express')
var app=express()
app.all("/student/:id([0-9]{10})",(req,res)=>{
    res.send(`student id is valid :${req.params.id}`)
})
 app.listen(3000)
