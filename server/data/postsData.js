const database = require('../infra/dataBase');
//essa camada será apenas para interagir com o DB

exports.savePosts = (post)=>{
    return database.one('INSERT INTO post."blogPost" (title, content) VALUES ($1, $2) RETURNING *', [post.title, post.content]);
}

exports.getPosts = ()=>{ 
    return database.query('SELECT * FROM post."blogPost"');
}

exports.getPostOne = (id)=>{
    return database.oneOrNone('SELECT * FROM post."blogPost" WHERE id=$1', [id])
}

exports.updatePosts = (id, newPost)=>{
    return database.none('UPDATE post."blogPost" SET title=$1, content=$2 WHERE id=$3',
    [newPost.title, newPost.content, id]);
}

exports.deletePosts = (id)=>{
    return database.none('DELETE FROM post."blogPost" WHERE id=$1', [id]);
}
