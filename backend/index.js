const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rotas / Recursos
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * _________________________________________________________________________________
 * Query Params: 
 *   Parâmetros nomeados enviados na rota após "?", servem pra filtros, exemplo:
 *   "/users?id=1&?name=Fabielson"
 * _________________________________________________________________________________
 * Route Params: 
 *   Parâmetros utilizados para identificar recursos únicos, exemplo:  
 *   "/users/:id".
 *  --------------------------------------------------------------------------------
 * Request Body: 
 *   Aqui usamos o request.body pra pegar algo num POST via "request.body"
 * _________________________________________________________________________________
 */

app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Guilherme Borges"
    });
});

app.listen(3333);