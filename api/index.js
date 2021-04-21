
const express = require('express');
const app = express();
const commentService = require('./services/commentsService');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3000;

app.get('/api/comment', (req, res) => {
    const comments = commentService.getAll();
    return res.status(200).json({ comments })
})

app.post('/api/comment', (req, res) => {
    const comment = req.body;
    commentService.insertComment(comment);
    return res.status(201).json({ comment });
})

app.listen(port, () => {
    console.log(`Api rodando - http://localhost:${port}`)
})

