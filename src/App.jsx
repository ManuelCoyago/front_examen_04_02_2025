import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Página de registro de información</h1>
      <Link to="/create">
        <button>create registro</button>
      </Link>
      <Link to="/obtener">
        <button>Obtener registros</button>
      </Link>
    </div>
  );
}
