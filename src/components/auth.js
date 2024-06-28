import React, { createContext, useState, useEffect } from "react";
import { startTokenCheck, stopTokenCheck } from "./tokenService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    startTokenCheck(setIsLoggedIn);

    // Limpar intervalo ao desmontar o componente
    return () => {
      stopTokenCheck();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
