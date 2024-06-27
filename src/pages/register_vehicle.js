import React, { useEffect, useState } from "react";
import axios from "axios";
import getUF from "../components/getUf";
import getCountry from "../components/getcountry";
import "../App.css";

function Register_vehicle() {
  const [model, setModel] = useState("");
  const [mark, setMark] = useState("");
  const [color, setColor] = useState("");
  const [type_vehicles, setType_vehicles] = useState("");
  const [exchange, setExchange] = useState("");
  const [vehicle_situation, setVehicle_situation] = useState("");
  const [uf, setUf] = useState("");
  const [ufsel, setUfsel] = useState([]);
  const [country, setCountry] = useState("");
  const [countrys, setCountrys] = useState([]);
  const [plate, setPlate] = useState("");

  useEffect(() => {
    const fetchUF = async () => {
      try {
        const countryData = await getCountry();
        const ufData = await getUF();
        setUfsel(ufData);
        setCountrys(countryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUF();
  }, []);

  const handleRegister_vehicle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/newVehicle", {
        model,
        mark,
        color,
        type_vehicles,
        exchange,
        vehicle_situation,
        uf,
        country,
        plate,
      });
      console.log(response.data);
      // Limpar os campos após o registro bem-sucedido
      setModel("");
      setMark("");
      setColor("");
      setType_vehicles("");
      setExchange("");
      setVehicle_situation("");
      setUf("");
      setCountry("");
      setPlate("");
    } catch (error) {
      // console.error(error);
    }
  };

  const handleUFSelection = (e) => {
    setUf(e.target.value); // Atualiza o estado com o valor selecionado pelo usuário
  };

  const handleCountrySelection = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister_vehicle}>
        <div className="form-group">
          <label>Modelo</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Marca</label>
          <input
            type="text"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Cor</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tipo do veiculo</label>
          <select
            id="type_vehicles"
            value={type_vehicles}
            onChange={(e) => setType_vehicles(e.target.value)}
            required
          >
            <option value=""></option>
            <option value="passeio">passeio</option>
            <option value="corporativo">corporativo</option>
            <option value="caminhonete">caminhonete</option>
            <option value="Van">Van</option>
          </select>
        </div>
        <div className="form-group">
          <label>Cambio</label>
          <select
            value={exchange}
            onChange={(e) => setExchange(e.target.value)}
            required
          >
            <option value=""></option>
            <option value="Manual">Manual</option>
            <option value="Automatico">Automatico</option>
          </select>
        </div>
        <div className="form-group">
          <label>situação do veiculo</label>
          <select
            value={vehicle_situation}
            onChange={(e) => setVehicle_situation(e.target.value)}
            required
          >
            <option value=""></option>
            <option value="Bom">Bom</option>
            <option value="emAtendimento">em Atendimento</option>
            <option value="Oficina">Oficina</option>
            <option value="Patio">Patio</option>
          </select>
        </div>
        <div className="form-group">
          <label>Estado</label>
          <select id="uf" value={uf} onChange={handleUFSelection} required>
            <option value=""></option>
            {Array.isArray(ufsel) &&
              ufsel.map((ufItem) => (
                <option key={ufItem.sigla} value={ufItem.sigla}>
                  {ufItem.nome}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>pais</label>
          <select
            id="country"
            value={country}
            onChange={handleCountrySelection}
            required
          >
            <option value=""></option>
            {Array.isArray(countrys) &&
              countrys.map((countryItem) => (
                <option key={countryItem.nome} value={countryItem.nome}>
                  {countryItem.nome}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>placa</label>
          <input
            type="text"
            value={plate}
            maxLength={7}
            onChange={(e) => setPlate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register_vehicle;
