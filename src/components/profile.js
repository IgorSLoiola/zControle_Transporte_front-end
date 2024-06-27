import { jwtDecode } from "jwt-decode";

const getUserId = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.sub; // Assumindo que o payload contém um campo 'userId'
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

export default getUserId;
