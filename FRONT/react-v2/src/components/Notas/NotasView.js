import React, { useEffect } from "react";
import { useState } from "react";
import NotasCard from "./NotasCard";
import * as notasServer from '../../server/notasServer'

export default function NotasView() {
  const notaPruebas = [
    {
      id: 1,
      title: "Pasear al gato",
      description: "Se portó bien hoy",
    },
    {
      id: 2,
      title: "Pasear al perro",
      description: "Se portó bien hoy",
    },
    {
      id: 3,
      title: "Pasear al gato 2",
      description: "Se portó bien ayer",
    },
  ];

  const listNotas = async () => {
    try {
      const res = await notasList.listNotas();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const [notas, setNotas] = useState([]);

  useEffect(() => {
    listNotas();
  }, []);

  return (
    <div>
      {notas.map((notas) => (
        <>
          <NotasCard title={notas.title} description={notas.description} />
        </>
      ))}
    </div>
  );
}
