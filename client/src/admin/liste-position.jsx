/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contenu from "./Contenu";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCog,
  faTag,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function listeposition() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    affiche();
  }, []);

  const affiche = async () => {
    try {
      const response = await axios.get("http://localhost:8080/position/getAll");
      console.log(response.data);
      const info = response.data;
      setData(info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const supprimer = async (id) => {
    if (confirm("Voulez-vous vraiment supprimer ce espace?")) {
      await axios.delete(`http://localhost:8080/position/delete/${id}`);
      alert("DELETES SUCCESSFUL");
      affiche();
    } else {
      alert("Ok Cool");
      affiche();
    }
  };

  const modifier = async (id) => {
    await axios.get(`http://localhost:8080/position/getById/${id}`);
    navigate(`/admin/modifier-position/${id}`);
  };

  return (
    <div>
      <Contenu />
      <div className="body2">
        <div className="section2">
          <button className="add">
            <a href="/admin/ajouter-position">Ajouter position</a>
          </button>
        </div>

        {data.map((item, id) => {
          return (
            <div key={id}>
              <div className="position">
                <h1>
                  <span>{item.nom_agence}</span>
                </h1>
                <h3 className="num">Espace N°{item.numero}</h3>
                <p>{item.localisation}</p>
                <br />
                <h3>
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserCog} />
                  </div>{" "}
                  {item.capacite} personne
                </h3>
                <br />
                <h4>
                  <div className="icon">
                    <FontAwesomeIcon icon={faMoneyBillAlt} />
                  </div>{" "}
                  {item.prix_i} Ar/j
                </h4>
                <br />
                <div className="status">{item.status}</div>
                <br />
                <button
                  className="btn-modif"
                  onClick={() => modifier(`${item.id}`)}
                >
                  Modifier
                </button>
                <button
                  className="btn-delete"
                  onClick={() => supprimer(`${item.id}`)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default listeposition;
