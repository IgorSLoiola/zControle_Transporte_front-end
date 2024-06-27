import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import getUserId from "../components/profile";
import "../App.css";

const UserProfile = () => {
  const { Id } = useParams(); // Obtém o userId da URL
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Instância do useNavigate

  useEffect(() => {
    const id = getUserId();
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (Id) {
      fetchUser();
    }
  }, [Id, navigate]); // Dependência adicionada: navigate
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default UserProfile;
