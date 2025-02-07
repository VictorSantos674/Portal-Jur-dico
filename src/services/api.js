import axios from "axios";

const API_URL = "https://api.exemplo.com/processos";

export const buscarProcesso = async (numero) => {
  try {
    const response = await axios.get(`${API_URL}/${numero}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar processo:", error);
    return null;
  }
};
