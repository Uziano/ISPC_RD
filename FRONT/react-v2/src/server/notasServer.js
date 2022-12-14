const API_URL = "http://localhost:8000";

export const notasList = async () => {
  return await fetch(API_URL);
};
