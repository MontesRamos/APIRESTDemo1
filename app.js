//libraries
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express(); //create a instance of express app
const cors=require('cors');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.get('/ruta1',(req,res)=>{
	res.send("hellow world");
})

//rutas
var route_n1 = require('./routes/user');
app.use('/example_route',route_n1);
module.exports = app;