import { jwtDecode } from "jwt-decode";

let interval;

export const startTokenCheck = (setIsLoggedIn) => {
  interval = setInterval(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decodedToken.exp < now) {
          setIsLoggedIn(false);
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, 60000); // 60000 ms = 1 minuto
};

export const stopTokenCheck = () => {
  clearInterval(interval);
};
