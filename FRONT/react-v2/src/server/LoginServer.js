const API_URL = "http://127.0.0.1:8000/usuario/login/username/password";

export const conectUsuario = async (usuario) => {
  const conectUsuario = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  };
  return await fetch(API_URL, conectUsuario);
};
//Manejar datos del body linea 7
//La URL debe corregirse agregando username y pass
