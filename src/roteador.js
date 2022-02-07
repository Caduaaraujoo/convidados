const express = require('express');
const { todosConvidados, addConvidado, excluirConvidado } = require('./controladores/controladorConvidados');



const rotas = express();

rotas.get('/convidados', todosConvidados);
rotas.post('/convidados', addConvidado);
rotas.delete('/convidados/:nome', excluirConvidado);




module.exports = rotas