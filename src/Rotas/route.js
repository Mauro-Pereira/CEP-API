const express = require('express');
const route = express.Router();

//Importa cepController da pasta controller
const cepController = require('../Controller/BuscaCep');

//rota cepByNumber
route.get('/',cepController.cepByNumber);
//rota ceByAddress
route.get('/cepByAddress',cepController.cepByAddress);

module.exports = route;