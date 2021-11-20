const axios = require('axios');
const crypto = require('crypto');
const postsService = require('../service/postsService');

const generation = {
    small: ()=>{return crypto.randomBytes(5).toString('hex')},
    big: ()=>{return crypto.randomBytes(20).toString('hex')}    
}

const baseUrl =  'http://localhost:3000/posts/';

const req = (url, method, data)=>{
    return axios({ url, method, data });
}

test('save posts', async()=>{
    const dataPost = { title: generation.small(), content: generation.big() };
    
    const res = await req(baseUrl, 'POST', dataPost);
      
    const posts = res.data;
    expect(posts.title).toBe(dataPost.title);
    await postsService.deletePosts(posts.id);
});


test('read posts', async()=>{
    const dataPost = await postsService.savePosts({ title: generation.small(), content: generation.big() });
    
    const res = await req(baseUrl, 'GET');
    
    const posts = res.data;
    expect(posts).toHaveLength(1);
    await postsService.deletePosts(dataPost.id);
});


test('update posts', async()=>{
    const dataPost = await postsService.savePosts({ title: generation.small(), content: generation.big() });
    const newDataPost = { title: generation.small(), content: generation.big() };

    await req(baseUrl+dataPost.id, 'PUT', newDataPost);
    
    const updatedPost = await postsService.getPostOne(dataPost.id);
    expect(updatedPost.title).toBe(newDataPost.title);
    await postsService.deletePosts(dataPost.id);
});


test('delete posts', async()=>{
    const dataPost = { title: generation.small(), content: generation.big() }; 
    const post = await postsService.savePosts(dataPost);

    await req(baseUrl+post.id, 'DELETE');

    const isPost = await postsService.getPosts();
    expect(isPost).toHaveLength(0);
})