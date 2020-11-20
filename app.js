const express = require('express');
const app = express();

const port = normalizePort(process.env.PORT || '3000');
const bodyParse = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

const route = require('./src/Rotas/route');

function normalizePort(val){
    const port = parseInt(val,10);
    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

//uso das rotas
app.use('/',route);
app.use('/cepByAddress',route);




app.listen(port, function(){
    console.log('app listening on port ' + port);
});