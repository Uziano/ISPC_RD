import React from 'react'

function LoginRegistro() {
  return (
  <div className="col-md-6 mx-auto p-4">
      <form>
        <h3 className='display1 mb-3 text-left'>Sign Up</h3>
        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Correo"
          />
        </div>
        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="usuario"
            className="form-control"
            placeholder="Usuario"
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
          <label>Ingrese nuevamente su contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-3">
                <label className="form-label">Agregar imagen</label>
                <input type="file" className="form-control"/>
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

export default LoginRegistro