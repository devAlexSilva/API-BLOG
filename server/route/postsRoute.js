//camada para administrar as rotas
const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');


router.post('/posts', async (req, res) => {
    const dataPost = req.body;
    const newPost = await postsService.savePosts(dataPost);
    res.json(newPost);
});

router.get('/posts', async (req, res) => {
    const posts = await postsService.getPosts();

 res.json(posts);
});

router.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const posts = await postsService.getPostOne(id);
    res.json(posts); 
});

router.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const dataPost = req.body;
    const newPost = await postsService.updatePosts(id, dataPost);

    res.json(newPost);
});

router.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    await postsService.deletePosts(id);
    res.end();
});


module.exports = router;