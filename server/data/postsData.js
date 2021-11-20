const database = require('../infra/dataBase');
//essa camada será apenas para interagir com o DB
exports.getPosts = ()=>{ 
    return database.query('SELECT * FROM post."blogPost"');
}

exports.savePosts = (post)=>{
    return database.one('INSERT INTO post."blogPost" (title, content) VALUES ($1, $2) RETURNING *', [post.title, post.content]);
}

exports.deletePosts = (id)=>{
    return database.none('DELETE FROM post."blogPost" WHERE id=$1', [id]);
}