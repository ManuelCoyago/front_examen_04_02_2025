import React, { useState } from "react";
import { crearDatos } from "../api/api.jsx";

const CrearData = () =>{
    const[idCode,setIdCode] = useState("");
    const[fullName,setFullName] = useState("");
    const[level,setLevel] = useState(""); 
    const[sales,setSales] = useState("");
    const[pay,setPay] = useState("");
    const[totalPay,setTotalPay] = useState("");
    const[bono,setBono] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const newData = {idCode,fullName,level,sales,pay,totalPay,bono};
        const response = await crearDatos(newData);
        setIdCode("");
        setFullName("");
        setLevel("");
        setSales("");
        setPay("");
        setTotalPay("");
        setBono("");
        console.log("Respuesta del server:",response)
    } catch (e){
        console.error("Error al crear",e);
    }
}
return(
    <div>
        <h2>Formulario de creacion</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Codigo de empleado: </label>
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
                id = "fullName"
                value = {fullName}
                onChange={(e)=>setFullName(e.target.value)}
                />
            </div>
            <div>
                <label>Nivel: </label>
                <input
                type ="text"
                id = "level"
                value = {level}
                onChange={(e)=>setLevel(e.target.value)}
                />
            </div>
            <div>
                <label>$ de ventas: </label>
                <input
                type ="text"
                id = "sales"
                value = {sales}
                onChange={(e)=>setSales(e.target.value)}
                />
            </div>
            <div>
                <label>Pago por nivel: </label>
                <input
                type ="text"
                id = "pay"
                value = {pay}
                onChange={(e)=>setPay(e.target.value)}
                />
            </div>
            <div>
                <label>Pago total: </label>
                <input
                type ="text"
                id = "totalPay"
                value = {totalPay}
                onChange={(e)=>setTotalPay(e.target.value)}
                />
            </div>
            <div>
                <label>Bono: </label>
                <input
                type ="text"
                id = "bono"
                value = {bono}
                onChange={(e)=>setBono(e.target.value)}
                />
            </div>
            
            <button type="submit">Crear Empleado</button>
        </form>
    </div>
)
};
export default CrearData;