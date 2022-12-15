const API_URL = 'http://127.0.0.1:8000/usuario/login/';


export const loginUsuario = async (mail, password) => {
    return await fetch(API_URL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail,
            password
        })
    });
};

export const conectUsuario = async (usuarioId) => {
    return await fetch(`${API_URL}${usuarioId}`);
};