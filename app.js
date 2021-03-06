//libraries
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express(); //create a instance of express app
const cors=require('cors');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.set('views','./views'); 
app.set('view engine', 'ejs');

app.get('/ruta1',(req,res)=>{
	//res.send("hellow world");
	res.render('vista1');
})

app.get('/ruta2',(req,res)=>{
	res.send("hola esta es una prueba desde EC2 Ubuntu");
})

//rutas
var route_n1 = require('./routes/user');
app.use('/example_route',route_n1);
module.exports = app;