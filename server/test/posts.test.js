const axios = require('axios');
const crypto = require('crypto');
const postsService = require('../service/postsService');

const generation = {
    small: ()=>{return crypto.randomBytes(5).toString('hex')},
    tall: ()=>{return crypto.randomBytes(20).toString('hex')}
    
}

test.only('save posts', async()=>{
    const dataPost = await postsService.savePosts({ title: generation.small, content: generation.tall });
    
    const res = await axios({
        url: 'http://localhost:3000/posts',
        method: 'GET'
    },)

    const posts = res.data;  
    expect(posts).toHaveLength(1);
    await postsService.deletePosts(dataPost.id);
    
});



test('get posts', async()=>{
    const res = await axios({
        url: 'http://localhost:3000/posts',
        method: 'GET'
    });
    const posts = res.data;
    console.log(posts)
    expect(posts[0].id).toBe(1);
});