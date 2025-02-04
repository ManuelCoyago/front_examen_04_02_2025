import { Link } from "react-router-dom";
import Create from "../components/createArt.jsx";

export default function Crear() {
  return (
    <div>
      <h1>Create the Article</h1>
      <Create/>
      <Link to="/">
        <button>back to the menu</button>
      </Link>
    </div>
  );
}
