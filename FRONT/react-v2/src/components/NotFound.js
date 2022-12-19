import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Oops! Aca no es...</h1>
      <Link to="/inicio">Ir al Inicio</Link>
    </div>
  );
}
