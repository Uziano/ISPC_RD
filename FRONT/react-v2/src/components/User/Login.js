import React from 'react'

function Login() {
  return (
  <div className="col-md-6 mx-auto p-4">
      <form>
        <h3 className='display1 mb-3 text-left'>Sign In</h3>
        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Correo"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recuerdame
            </label>
          </div>
        </div>
        <div className="d-grid p-4">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvidaste tu <a href=" ">contraseña?</a>
        </p>

      </form>
    </div>
  )
}

export default Login