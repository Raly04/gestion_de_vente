/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Contenu from "./Contenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ajouterposition() {
  const [input, setInput] = useState([]);
  const navigate = useNavigate();
  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/position/save", {
        statut: "libre",
        ...input,
      })
      .then(function (response) {
        if (response) {
          alert("Success");
          navigate("/admin/liste-position");
        } else {
          alert("Erreur d'insertion ...");
        }
      });
    console.log(input);
  };

  return (
    <div>
      <Contenu />
      <div className="body2">
        <h1>Ajouter position</h1>
        <br />
        <br />
        <form className="addposition" onSubmit={submit}>
          <br />
          <br />
          <label htmlFor="nom">Nom de l'agence</label>
          <br />
          <input type="text" onChange={change} name="nom_agence" />
          <br />
          <br />
          <label htmlFor="Numero">Numero d'espace</label>
          <br />
          <input type="text" onChange={change} name="numero" />
          <br />
          <br />
          <label htmlFor="nom">Localisation</label>
          <br />
          <input type="text" onChange={change} name="localisation" />
          <br />
          <br />

          <label htmlFor="email">Capacité</label>
          <br />
          <input type="text" onChange={change} name="capacite" />
          <br />
          <br />
          <label htmlFor="prix">Prix journalier</label>
          <br />
          <input type="text" onChange={change} name="prix_i" />
          <br />
          <br />
          <button type="submit">Confirmer</button>
        </form>
      </div>
    </div>
  );
}

export default ajouterposition;
