const express = require('express')
const rotas = express.Router()

function imc(peso,altura){
    return (peso/(altura*altura))*100
}


rotas.get('/',(req,res)=>{
    res.json({ola:'Seja Bem Vindo'})
})
rotas.get('/peso/:pesoId/altura/:alturaId',(req,res)=>{
    const peso = req.params.pesoId
    const altura = req.params.alturaId
    imc(peso,altura)
    
    if(!imc){
        res.status(404).json(
            {
                erro:'Valor Incorreto',ValorDigitado:peso
            }
        )
    }else{
        
        res.status(200).json({IMC:imc(peso,altura)})
    }

})
module.exports = rotas