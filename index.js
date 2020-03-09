'use strict' 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = require('./app'); //--> configuración de Express
var port = 3800; //--> puerto estático
const fs=require('fs');
const https=require('https');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(port)
