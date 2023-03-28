var express = require('express')
var app = express()
app.use("/hello", (req, res) => {
    res.send("hello welcome the webpage")
})
app.listen(3000)