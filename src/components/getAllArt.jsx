import React, { useEffect, useState } from "react";
import { obtenerTodos } from "../api/api.jsx";
const ObtenerDatos = () =>{
    const [datos,setDatos] = useState([]);
    useEffect(() =>{
        const fetchDatos = async () =>{
            try{
                const data = await obtenerTodos();
                setDatos(data);
            } catch (error){
                console.error("Error en la carga de datos",error)
            }
        }
        fetchDatos(); 
    },[]);
    return(
        <div>
            <h1>Informacion obtenida</h1>
            <ul>
                {datos.map((dato)=>(
                    <li key={dato._id}> 
                        <h2>{dato.fullName} </h2>
                        <p>Su sueldo es: {dato.pay}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ObtenerDatos;