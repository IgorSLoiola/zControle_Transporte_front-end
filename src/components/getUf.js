import axios from "axios";
import "../App.css";

async function getUF() {
  try {
    const response = await axios.get(`http://localhost:5000/UF`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Response data is not an array:", response.data);
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getUF;
