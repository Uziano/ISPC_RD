import React, { useEffect } from "react";
import { useState } from "react";
import NotasCard from "./NotasCard";
import * as notasServer from "../../server/notasServer";

export default function NotasView() {
  // const notaPruebas = [
  //   {
  //     id: 1,
  //     title: "Pasear al gato",
  //     description: "Se portó bien hoy",
  //   },
  //   {
  //     id: 2,
  //     title: "Pasear al perro",
  //     description: "Se portó bien hoy",
  //   },
  //   {
  //     id: 3,
  //     title: "Pasear al gato 2",
  //     description: "Se portó bien ayer",
  //   },
  // ];

  const [notas, setNotas] = useState([]);

  const ListNotes = async () => {
    try {
      const res = await notasServer.listNotes();
      // console.log(res);
      const data = await res.json();
      setNotas(data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    ListNotes();
  }, []);

  console.log(notas)

  //Condicionamos si tiene o no notas creadas
  if (notas.length === 0) {
    return (
      <h1>HOLAS SEÑORAS</h1>  
    );
  } else {
    return (
      <>
        <div>
          {notas.map((notas) => (
            <>
              <NotasCard title={notas.title} description={notas.description} />
            </>
          ))}
        </div>
      </>
    );
  }
}
