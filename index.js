
const express = require('express')
const rotas = require('./rotas/rotas')
const porta = process.env.PORT || 3000
const app = express()

app.use('/',rotas)
app.get('*',(req,res)=>{
    res.status(404).json({
        error:'Valor nao identificado'
    })
})

app.listen(porta,()=>{console.log('rodando')})