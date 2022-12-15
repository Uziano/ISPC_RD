const API_URL = "http://127.0.0.1:8000/usuario/login/";

export const conectUsuario = async (usuario) => {
  const conectUsuario = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  };
  return await fetch(API_URL, conectUsuario);
};
