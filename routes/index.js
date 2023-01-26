const express = require('express');     // importação

const router = express.Router();   // Rotas (quando o servidor for acessado, pra onde ele vai?)

router.get('/',(req, res) =>{      // Primeira Rota // Função anonima // dois parametros //adicionado posts
    let obj = {
        'nome': req.query.nome
    };
    res.render('home', obj);
});

module.exports = router;
