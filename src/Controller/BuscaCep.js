//Root da API da Viacep
const api = require('../Config/config');
//Importa o node-fetch
const fetch = require('node-fetch');


module.exports = {

    /*
    Função responsável por obter detalhes (endereços)
    de um determinado cep. Se entrarmos com o cep 45810000 (sem o traço)
    teremos os dados relacionados a Porto Seguro BA. Não pode haver a presença do
    traço ao utilizar esse função;
    */

    cepByNumber:  (req, res) =>{

        //variável que armazena um cep
        const cep = req.body.cep;

         //É no fetch onde é pego os endereços, usando o cep
        try{
            fetch(api + '/' + cep + '/json/')
            .then(res => res.json())
            .then(json => res.status(200).json(json))
              .catch(function(err){
                console.error('Não foi possível achar a informação', err)
              })

        }catch(error){
            console.log(error);
        }
    },

    /*
    Função responsável por obter cep(s) por meio de um determinadado endereço. Para
    usar essa função, o usuário deve entrar com três dados a sigla do unidade federativa (sempre em maiúscula),
    a cidade e o logradouro. Em nenhuma delas deve haver acentos ortográficos.
    */

    cepByAddress: async (req, res)=>{

        //Função toUppercase é usado para deixar a sigla sempre em maiúscula
        const siglaEstado = req.body.siglaEstado.toUpperCase();
        //A função Normalize faz com que as palavras não tenha acentos ortográficos
        const cidade = req.body.cidade.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const logradouro =  req.body.logradouro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        //É no fetch onde é pego os cep(s), usando o endereço
        try{
           fetch(api + '/' + siglaEstado +'/'+cidade+'/'+logradouro+ '/json/')
           .then(res => res.json())
           .then(json => res.status(200).json(json))
             .catch(function(err){
               console.error('Não foi possível achar a informação', err)
             })


        }catch(error){
            console.log(error);
        }

    }

}