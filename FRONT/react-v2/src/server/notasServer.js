const API_URL = "http://127.0.0.1:8000/notas/notas-list/";
//``
export const listNotes = async () => {
  return await fetch(API_URL);
};

export const addNote = async (newNote) => {
  console.log(newNote);
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors", //
    // headers: [],
    body: JSON.stringify({
      user: Number(newNote.user),
      title: String(newNote.title).trim(),
      description: String(newNote.description).trim(),
      current_state: Number(newNote.current_state),
      deadline: Number(newNote.deadline),
    }),
  });
};
