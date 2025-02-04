import axios from "axios";

const Url = "https://localhost:3000/api/articulos";

export const obtenerTodos = async () => {
    try{
        const response = await axios.get(Url);
        return  response.data;
    } catch (error){
        console.error("Hubo en error en la obtencion de datos",error);
        throw error;
    }
};
export const crearDatos = async (data) => {
    try {
        const response = await axios.post(Url, data);
        return response.data;
      } catch (error) {
        console.error("Hubo un error en la creacion de datos", error);
        throw error;
      }
    };
