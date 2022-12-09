// DEPENDENCIAS
import React, { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTES
// import * as LoginServer from './LoginServer'; // como el archivo no es de react se debe importar con * as NOMBRE_ARCHIVO

const LoginForm = () =>{
    // VARIABLES DEL COMPONENTE
    const history = useNavigate();
    const params = useParams();
    // ESTADO INICIAL
    const initialState = { username: "", password: "" };

    // HOOKS - setUsuario nos permite modificar el estado del usuario
    const [ingreso, setIngreso] = useState(initialState);

    // GUARDA LA INFO DE LOS INPUTS
    const handleInputChange = (e) => {
        // OBSERVAR FUNCIONAMIENTO CON LOS CONSOLE.LOG()
        console.log(e.target.name);
        console.log(e.target.value);
        //ESTA LINEA CAPTURA LOS VALORES DEL INPUT, LOS GUARDA EN INGRESO Y RENDERIZA EN EL INPUT
        setIngreso({ ...ingreso, [e.target.name]: e.target.value });
        console.log(ingreso);
    };

    useEffect(() => {
    if (params.username) {
        setIngreso(params.username);
    }
    // eslint-disable-next-line
    }, []);

     // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL FORM que enviara el usuario al servidor para grabarlo en la base de datos
     const handleSubmit = async (e) => {
        e.preventDefault();
        // Podemos ver como se crea el nuevo usuario en un json
        //  console.log(usuario);
        try {
          let res;
          if (!params.username) {
            console.log("RES: ", ingreso);
            res = await LoginServer.loginUsuario(ingreso);
             console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data.username != '') {
              history("/");
              setIngreso(ingreso);
            }
          } else {
            // await UsuarioServer.updateUsuario(params.id, usuario);
          }
           history("/");
        } catch (error) {
          console.log(error);
        }
      };

return(
    <div className="conteiner center">
        <div className="col-md-6 mx-auto">
            <h3 className="mb-3 text-center">Ingresar Usuario y Contraseña</h3>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 my-2">
                        <i className="fa fa-user"></i>
                        <label>Usuario</label>
                        <input type="text" className="form-control" name="username" id="username" placeholder="Usuario" value={ingreso.username} onChange={handleInputChange} required="required"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="inputPassword5">Password</label>
                        <input type="password" name="password" id="password" value={ingreso.password} onChange={handleInputChange} className="form-control" aria-describedby="passwordHelpBlock"/>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </small>
                    </div>
                    <div className="mb-6 my-2">
                    <button type="submit" className="btn btn-block btn-primary">ENTRAR</button>
                    </div>
                </form>				          
            </div>
        </div>
    </div>

);

}

export default LoginForm;