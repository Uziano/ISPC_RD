const API_URL = "http://127.0.0.1:8000/notas/notas-list/";
//``
export const listNotes = async () => {
  return await fetch(API_URL);
};
