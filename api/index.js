var xss = require("xss");

const express = require('express');
const app = express();
const cors = require('cors')
const commentService = require('./services/commentsService');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3000;

app.get('/api/comment', (req, res) => {
    const comments = commentService.getAll();
    return res.status(200).json({ comments })
})

app.post('/api/comment', (req, res) => {
    const name = xss(req.body.name);
    const comment = xss(req.body.comment);
    const sanitizedComment = { name, comment };

    commentService.insertComment(sanitizedComment);
    return res.status(201).json(sanitizedComment);
})

app.listen(port, () => {
    console.log(`Api rodando - http://localhost:${port}`)
})

