var express = require('express')
var app = express()
app.all("/welcome", (req, res) => {
    res.send(" welcome the webpage")
})
app.listen(3000)