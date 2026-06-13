const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite que o frontend consuma esta API
app.use(express.json());

// Conexão com o MySQL (ajuste usuário e senha para o seu ambiente)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Insira sua senha do MySQL aqui
    database: 'catalogo_jogos'
});

db.connect(err => {
    if (err) console.error('Erro ao conectar ao banco:', err);
    else console.log('Conectado ao MySQL com sucesso!');
});

// Endpoint da API que o frontend vai consumir
app.get('/api/jogos', (req, res) => {
    db.query('SELECT * FROM jogos', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('API rodando na porta 3000 (http://localhost:3000/api/jogos)');
});