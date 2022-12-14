const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir:['views/partials']
})

app.engine('handlebars', hbs.engine());

app.set('view engine','handlebars');

app.get('/', (req,res) => {

    const autenticate = true;

    const usuarios = ["Lucas", "Rykelmy", "Állan, "];

    res.render('home', {autenticate, usuarios});
});

app.get('/info', (req,res) => {
  
    const user = 
    [
        {
            Nome: "Lucas",
            Idade: "18",
            Cidade: "Campo Limpo Paulista",
            Nota: 10
        },
        {
            Nome: "Paulo",
            Idade: "17",
            Cidade: "Jundiai",
            Nota: 9
        },
        {
            Nome: "Mauricio",
            Idade: "17",
            Cidade: "Varzea Paulista",
            Nota: 10
        }
    ];

    const aprovade = false;
    const mensagem = "sua infomação";

    res.render('info', {user: user, mensagem, aprovade});
});

app.get('/materia', (req,res) => {
    const materia = {
        Matematica: 8,
        Portugues: 7,
        Programação: 14,
        Comentarios: 5
    }
    res.render('materia',{materia})
});

app.listen(3000, () =>{
    console.log('App funcionante');
});