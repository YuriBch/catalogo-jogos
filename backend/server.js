const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // consumo da API
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQLHOST || 'seu-host-do-railway',
    user: process.env.MYSQLUSER || 'seu-usuario',
    password: process.env.MYSQLPASSWORD || 'sua-senha',
    database: process.env.MYSQLDATABASE || 'catalogo_jogos',
    port: process.env.MYSQLPORT || 3306
});

db.connect(err => {
    if (err) console.error('Erro ao conectar ao banco:', err);
    else console.log('Conectado ao MySQL com sucesso!');
});

// Endpoint q frontend vai consumir
app.get('/api/jogos', (req, res) => {
    db.query('SELECT * FROM jogos', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});