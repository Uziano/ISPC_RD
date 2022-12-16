import { useState } from "react";
// IMPORT Select (componente de react) Instalacion = npm i --save react-select 

export default function FormTest2() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [current_state, setCurrentState] = useState("");
  const [user, setUser] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/notas/notas-list/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          title: title,
          description: description,
          current_state: current_state,
          user:user,
          deadline:deadline,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTitle("");
        setDescription("");
        setCurrentState("");
        setUser("");
        setDeadline("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e)=>setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e)=>setDescription(e.target.value)}
        />
        <input
          type="text"
          value={current_state}
          placeholder=""
          onChange={(e) => setCurrentState(e.target.value)}
        />
        <input
          type="number"
          value={user}
          placeholder="Usuario"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          placeholder="Fecha de finalización"
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}
