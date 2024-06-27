import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

function Home() {
  return (
    <main className="body">
      <h2>Mapa</h2>
      <Link to="/map">
        <div className="div-map-link">
          <p className="background-map-link"></p>
        </div>
      </Link>
      <h2>Veiculos Disponiveis</h2>
      <div className="div-map-link">
        <p className="background-ambulancia-link"></p>
      </div>
      <h2>Cadastro de Veiculos</h2>
      <div className="div-map-link">
        <p></p>
      </div>
    </main>
  );
}

export default Home;
