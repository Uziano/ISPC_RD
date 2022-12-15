import React, { useEffect } from "react";
import { useState } from "react";
import NotasCard from "./NotasCard";
import * as notasServer from "../../server/notasServer";

export default function NotasView() {
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

  console.log(notas);

  //Condicionamos si tiene o no notas creadas
  //y retornamos un aviso o las notas del back
  if (notas.length === 0) {
    return <h1>Ups, no tiene notas creadas...</h1>;
  } else {
    return (
      <>
        <div>
          {notas.map((notas) => (
            <NotasCard title={notas.title} description={notas.description} />
          ))}
        </div>
      </>
    );
  }
}
