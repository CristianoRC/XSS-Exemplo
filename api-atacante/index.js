
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3001;

app.post('/', (req, res) => {
    const token = req.headers.authorization;
    console.log(`Token: ${token}`);
    console.log(`Corpo: ${JSON.stringify(req.body)}`);
    console.log('---------');
    // EX: Fazer requisição para comprar algo no nome da pessoa
    return res.status(200).send();
})


app.listen(port, () => {
    console.log(`Api rodando - http://localhost:${port}`)
})

