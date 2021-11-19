const database = require('../infra/dataBase');
//essa camada será apenas para interagir com o DB
exports.getPosts = ()=>{ 
    return database.query('select * from post."blogPost"');
}