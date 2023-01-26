const express = require('express');     // importação

const router = express.Router();        // Rotas (quando o servidor for acessado, pra onde ele vai?)

router.get('/posts/:slug',(req, res)=>{    //Primeira Rota // Função anonima // dois parametros //adicionado posts
    let slug = req.params.slug;             //let = 
    res.send("SLUG do post: " + slug);
});

router.get('/rota1',(req, res)=>{        //Segunda Rota // Função anonima // dois parametros
    res.send("Rota de fuga 1...");
});

router.get('/rota2',(req, res)=>{        //Terceira Rota // Função anonima // dois parametros
    res.json(req.query);
});

module.exports = router;
