let { convidados } = require('../dados/convidados');

const todosConvidados = (req, res) => {
    const { nome } = req.query

    const nomeEncontrado = convidados.find((nomeConvidado) => {
        return nomeConvidado === nome
    })
    
    if(nomeEncontrado !== nome){
        return res.status(404).json({
            mensagem: 'O convidado não está na lista'
        })
    }
    
    if(nomeEncontrado){
        return res.status(200).json({
            mensagem:'Convidado na lista'
        })
    }
    
    return res.status(200).json(convidados);
}

const addConvidado = (req, res) => {
    const { nome } = req.body

    const convidadoNovo = {
        nome
    }

    const estaNaLista = convidados.find((convidado)=> {
        return convidado.nome === nome
    })

    if(estaNaLista){
        return res.json({
            mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também'
        })
    }

    convidados.push(convidadoNovo);

    return res.status(200).json({
       mensagem: 'Convidado adicionado.'
    })
}

const excluirConvidado = (req, res) => {
    const { nome } = req.params;

    const convidadoEncontrado = convidados.find((convidado) => {
        return convidado.nome === nome
    })

    if(!convidadoEncontrado){
        return res.status(400).json({
            mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.'
        })
    }

    convidados = convidados.filter((convidado) => {
        return convidado.nome !== nome
    });

    return res.status(200).json({
        mensagem: 'Convidado removido.'
    })
}


module.exports = {
    todosConvidados,
    addConvidado,
    excluirConvidado
}