const API_URL = "http://127.0.0.1:8000/usuario/login/";

export const loginUsuario = async (usuario) => {
  console.log(usuario);
  return await fetch(`${API_URL}${usuario.username}/${usuario.password}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      username: String(usuario.username).trim(),
      password: String(usuario.password).trim(),
    }),
  });
};
