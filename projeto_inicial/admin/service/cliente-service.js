const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const criaCliente = (nome, email) => { /*função que cria cliente*/
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', /*método POST para adicionar*/
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({  /*stringify pois JSON retorna texto*/
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => { /*função de remover cliente */
    return fetch(`http://localhost:3000/profile/${id}`, { /*id para saber qual cliente está sendo modificado*/
        method: 'DELETE'
    }).then(resposta =>{
        if(!resposta.ok){
            throw new Error('Não foi possível remover um cliente')
        }

    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o cliente')
    })
}

const atualizaCliente = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then (resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar um cliente')
    })
}

export const clienteService = { 
    listaClientes,
    criaCliente, 
    removeCliente,
    detalhaCliente,
    atualizaCliente
}