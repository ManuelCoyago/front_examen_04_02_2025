import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import Create from "../views/create.jsx";
import GetAll from "../views/getAll.jsx";

export default function Rutas (){
    return(
    <Router>
            <Routes>
                <Route path="/" element ={<App/>}/>
                <Route path="/Create" element ={<Create/>}/>
                <Route path="/GetAll" element ={<GetAll/>}/>
            </Routes>
    </Router>
    );
}