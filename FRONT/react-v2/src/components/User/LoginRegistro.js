import React, {useState, useEffect} from "react";
import {useParams,useNavigate } from "react-router-dom";
// import { useHistory, Navigate , useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// https://react-bootstrap.github.io/getting-started/introduction/

// import { Alert } from 'react-bootstrap/Alert';

// componentes
import * as RegisterServer  from "../../server/RegisterServer";

const User = () => {
    // VARIABLES DEL COMPONENTE
       const history = useNavigate();
       const params = useParams();

    // HOOK useState
    const initialState = {    
        id: 0,   
        mail: '',
        username:'',        
        password:'',
    };

    const [user, setUser] = useState(initialState);

    const handleInputChange = (e) => {
        // console.log(e);
        // console.log(e.target.name);
        // console.log(e.target.value);
        setUser({ ...user,[e.target.name]: e.target.value});
         console.log(user);
        
    }
    
    // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL FORM que enviara el usuario al servidor para grabarlo en la base de datos
    // variable global de respuesta
    var res;
    const handleSubmit = async (e) => {
        console.log(user);
        console.log(" HANDLE SUBMIT:", user.id);
        e.preventDefault();
        // Podemos ver como se crea el nuevo usuario en un json
        //  console.log(usuario);
        try {
          
          if (!params.id) {
            console.log(" ENTRA EN param.id NO EXISTE");
            res = await RegisterServer.registerUser(user);
            console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data.id !== 0) {
                console.log(" ENTRA EN data.id != 0");
                setUser([]);
            }
          } else {
            res = await RegisterServer.registerUser(params.id, user);
          }
           history("/");
        } catch (error) {
          console.log(error);
        }
    }

    // EFECTO
    useEffect(() => {
        if (params.id) {
          setUser(params.id);
        }
        // eslint-disable-next-line
      }, []);

    // RENDER o HTML o RETURN

  return (
  <div className="col-md-6 mx-auto p-4">
      <form onSubmit= {handleSubmit}>
        <h3 className='display1 mb-3 text-left'>Sign Up</h3>
        <div className="mb-3">
          <label>Correo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Correo"
            value={user.mail}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={user.password}
            onChange={handleInputChange}
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <div className="mb-3">
          <label>Ingrese nuevamente su contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={user.password}
            onChange={handleInputChange}
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <div className="d-grid p-4">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  )
}

export default User;