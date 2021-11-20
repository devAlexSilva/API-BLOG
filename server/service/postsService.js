const postsData = require('../data/postsData');
//pegando a query de dentro de data/postsData pra fazer a chamada por aqui
// retornando para as routas a respota

exports.savePosts = (post)=>{
    return postsData.savePosts(post);
}

exports.getPosts = ()=>{
    return postsData.getPosts();
}

exports.getPostOne = (id)=>{
    return postsData.getPostOne(id);
}

exports.updatePosts = (id, newPost)=>{
    return postsData.updatePosts(id, newPost);
}

exports.deletePosts = (id)=>{
    return postsData.deletePosts(id);
}
