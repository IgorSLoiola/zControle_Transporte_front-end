import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css"; // Este é opcional, caso queira garantir que os estilos sejam carregados

const MapPage = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    document.head.appendChild(link);

    //GET LIST VEHICLES
    const fetchPositions = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/vehicles");
        setCars(response.data);
      } catch (error) {
        console.error("Erro ao buscar posições:", error);
      }
    };
    fetchPositions();
  }, []);

  // const containerStyle = {
  //   width: "100%",
  //   height: "90vh",
  // };

  const center = {
    lat: -20.33,
    lng: -40.2919,
  };

  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={10}
        // style={containerStyle}
        className="leaflet-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="car-list">
        <h1>Lista de Carros</h1>
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Marca</th>
              <th>País</th>
              <th>Placa</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <td>{car.model}</td>
                <td>{car.mark}</td>
                <td>{car.country}</td>
                <td>{car.plate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MapPage;
