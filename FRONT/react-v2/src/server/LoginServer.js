const API_URL = "http://127.0.0.1:8000/usuario/login/";

export const LoginServer = async (usuario) => {
  const conectUsuario = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      username: usuario.username,
      password: usuario.password,
    }),
  };
  return await fetch(`${API_URL}${usuario.username}/${usuario.password}`);
};

