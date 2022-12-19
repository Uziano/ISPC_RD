//ESTE LLEVA LOS DATOS A NOTAS VIEW DESDE LA DB

const API_URL = "http://127.0.0.1:8000/notas/nota-user/";
const DELETE_URL = "http://127.0.0.1:8000/notas/nota-detail/";

export const listNotes = async (id_user) => {
  return await fetch(`${API_URL}${id_user}`, {
    method:"GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
};

export const DeleteNota = async (id_nota) => {
  return await fetch(`${DELETE_URL}${id_nota}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
};
