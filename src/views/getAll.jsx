import { Link } from "react-router-dom";
import GetData from "../components/getAllArt";
export default function Obtener() {
  return (
    <div>
      <h1>See the registers</h1>
      <GetData/>
      <Link to="/">
        <button>Back to the menu</button>
      </Link>
    </div>
  );
}
