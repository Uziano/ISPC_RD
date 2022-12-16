import { useState } from "react";

export default function FormTest2() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/usuario/usuario-list/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          username: username,
          mail: mail,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setUsername("");
        setMail("");
        setPassword("");
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
          value={username}
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={mail}
          placeholder="Mail"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Registrarse</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}
