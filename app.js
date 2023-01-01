var express = require('express');
var mongoose = require('mongoose');
var app   = express()
var cors = require('cors')
var bodyParser = require('body-parser')
require('dotenv').config()
app.use(cors({
    origin:"*",
    optionsSuccessStatus: 200,

}))
const port = process.env.PORT || 3000
const connect  = ()=>{
    //TODO:change the mongoose configuration
    return mongoose.connect("mongodb+srv://swiggy:swiggy@cluster0.u597afa.mongodb.net/?retryWrites=true&w=majority")
}
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


require("./mainRoutes")(app);

app.listen(port,()=>{
    connect()
    console.log(`listening on port ${process.env.PORT}`)
})