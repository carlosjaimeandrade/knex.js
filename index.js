const database = require('./database')

const dados = [{
    nome : "far cry",
    preco : 315.5
},
{
    nome : "far cry 2",
    preco : 34
}
]

//inserindo
database.insert(dados).into("games").then(data=>{
    
}).catch(err=>{
    console.log(err)
})

//consultando
database.select().from("games").then(data=>{ //ou select().table('games') 
})

//consulta com where
database.select().from("games")  //ou select().table('games')
    .where({nome:"far cry"}) //.orWhere()
    .whereRaw("preco > 122") // where cru
    //.whereRaw("nome = 'far cry' AND preco > 122") podemos criar um query cru com varias condições
.then(data=>{ 
    console.log(data)
})

// aqui você criar uma query literal digitando toda query
database.raw("select * FROM games") 

//delete
database.delete().from('games').where({id:1}).then(data=>{
    console.log(data)
})

//update
database.update({nome : "Resident evil", preco: 548}).from('games').then(data=>{
    console.log(data)
})

/* //order by
database.select().table('games').orderBy("id",'desc').then(dados=>{
    console.log(dados)
}); */

//join 1 - 1 // 1 - M
database.select(['games.nome','estudios.nome']).table('estudios').innerJoin('games','games.id', 'estudios.id').where({'games.id':2}).then(data=>{;
    console.log(data)
})

//transactions https://www.youtube.com/watch?v=jfvnHWVJz-E
//COMMIT consolidação de transação
//ROLLBACK TRANSAÇÃO TOTALMENTE DESFEITA
//NO MYSQL ELE É AUTO COMMIT ele atualiza atomaticamente apos os comando DE CRUD
//DESATIVANDO
//SET @@autocommit = OFF
//SELECT @@autocommit;

//iniciando transaction
//START TRANSACTION
    //CODIGO QUERY
//ROLLBACK