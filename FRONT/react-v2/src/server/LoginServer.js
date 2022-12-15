const API_URL = 'http://127.0.0.1:8000/usuario/usuario-list/';


export const loginUsuario = async (newRegistro) => {
    console.log(newRegistro);
    return await fetch(API_URL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        // headers: [],
        // consolelog(newRegistro)
        body: JSON.stringify({
            "username": String(newRegistro.mail).trim(),
            "password": String(newRegistro.password).trim()
        })
    });
};

export const conectUsuario = async (usuarioId) => {
    return await fetch(API_URL);
};