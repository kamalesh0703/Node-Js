var express = require('express')
var app = express()
app.all("/welcome", (req, res) => {
    res.send("hello")
})
app.listen(3000)