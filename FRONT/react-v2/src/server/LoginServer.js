const API_URL = 'http://127.0.0.1:8000/usuario/login/';


export const conectUsuario = async (usuario) => {
    return await fetch(`${API_URL}${usuario.mail}/${usuario.password}/`);
};