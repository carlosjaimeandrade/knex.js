const database = require('./database')

const dados = [{
    nome : "far cry",
    preco : 127.5
},
{
    nome : "far cry 2",
    preco : 122
}
]

//inserindo
database.insert(dados).into("games").then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})


//consultando
database.select().from("games").then(data=>{ //ou select().table('games')
    console.log(data)
})