import React, { useState } from "react";
import { crearDatos } from "../api/api.jsx";

const CrearData = () =>{
    const[idCode,setIdCode] = useState("");
    const[NombreCompleto,setNombreCompleto] = useState("");
    const[articulo,setarticulo] = useState(""); 
    const[cantProdComp,setcantProdComp] = useState("");
    const[precioProdUn,setprecioProdUn] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const newData = {idCode,NombreCompleto,articulo,cantProdComp,precioProdUn};
        const response = await crearDatos(newData);
        setIdCode("");
        setNombreCompleto("");
        setarticulo("");
        setcantProdComp("");
        setprecioProdUn("");
        console.log("Respuesta del server:",response)
    } catch (e){
        console.error("Error al crear",e);
    }
}
return(
    <div>
        <h2>Create</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>cedula: </label>
                <input
                type ="text"
                id = "idCode"
                value = {idCode}
                onChange={(e)=>setIdCode(e.target.value)}
                />
            </div>
            <div>
                <label>Nombre completo: </label>
                <input
                type ="text"
                id = "NombreCompleto"
                value = {NombreCompleto}
                onChange={(e)=>setNombreCompleto(e.target.value)}
                />
            </div>
            <div>
                <label>Articulo: </label>
                <input
                type ="text"
                id = "articulo"
                value = {articulo}
                onChange={(e)=>setarticulo(e.target.value)}
                />
            </div>
            <div>
                <label>$ cantidad de producto: </label>
                <input
                type ="text"
                id = "cantProdComp"
                value = {cantProdComp}
                onChange={(e)=>setcantProdComp(e.target.value)}
                />
            </div>
            <div>
                <label>Precio Unitario </label>
                <input
                type ="text"
                id = "precioProdUn"
                value = {precioProdUn}
                onChange={(e)=>setprecioProdUn(e.target.value)}
                />
            </div>

    
            
            <button type="submit">Crear Articulo</button>
        </form>
    </div>
)
};
export default CrearData;
