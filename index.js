const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/', (req,res) => {

    const autenticate = true

    res.render('home', {autenticate})
})

app.get('/info', (req,res) => {
    
    const user = {
        Nome: "Lucas",
        Idade: "18",
        Cidade: "Campo Limpo Paulista"
    }
    
    const mensagem = "sua infomação"


    res.render('info', {user: user, mensagem})
})

app.listen(3000, () =>{
    console.log('App funcionante')
})