const axios = require('axios');

test('get posts', async()=>{
    const res = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });
    const posts = res.data;
    expect(posts[0].id).toBe(1);
});