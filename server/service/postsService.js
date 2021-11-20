const postsData = require('../data/postsData');
//pegando a query de dentro de data/postsData pra fazer a chamada por aqui
// retornando para as routas a respota
exports.getPosts = ()=>{
    return postsData.getPosts();
}

exports.savePosts = (post)=>{
    return postsData.savePosts(post);
}

exports.deletePosts = (id)=>{
    return postsData.deletePosts(id);
}