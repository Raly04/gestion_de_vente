import { useEffect, useState } from "react";
import Contenu from "./Contenu";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ModifierPosition() {
  const [input, setInput] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    console.log("THE ID : ", id);
    const getInfo = async () => {
      const reponse = await axios.get(
        `http://localhost:8080/position/getById/${id}`
      );
      const info = reponse.data;
      console.log(info);
      setData(info);
    };
    getInfo();
  }, []);

  const change = (e) => {
    setHasChanged(true);
    const name = e.target.name;
    const value = e.target.value;

    // Create a copy of the data object
    const updatedData = { ...data };
    updatedData[name] = value; // You can access and use a different property from data here

    // Set the input state with the updated object
    setInput(updatedData);
  };
  const submit = async (e) => {
    console.log("INPUT :", input);
    e.preventDefault();
    if (hasChanged) {
      await axios
        .post("http://localhost:8080/position/save", input)
        .then(function (response) {
          if (response) {
            alert("Modifier avec success");
            navigate("/admin/liste-position");
          } else {
            alert("Erreur d'insertion ...");
          }
        });
    } else navigate("/admin/liste-position");
  };

  return (
    <div>
      <Contenu />
      <div className="body2">
        <h1>Modifier position</h1>
        <br />
        <br />
        <>
          {
            <form className="addposition" onSubmit={submit}>
              <br />
              <br />
              <input
                type="text"
                name="id"
                defaultValue={data.id}
                style={{ display: "none" }}
              />
              <label htmlFor="nom">Nom de l'agence</label>
              <br />
              <input
                type="text"
                onChange={change}
                defaultValue={data.nom_agence}
                name="nom_agence"
              />
              <br />
              <br />
              <label htmlFor="Numero">Numero d'espace</label>
              <br />
              <input
                type="text"
                onChange={change}
                defaultValue={data.numero}
                name="numero"
              />
              <br />
              <br />
              <label htmlFor="nom">Localisation</label>
              <br />
              <input
                type="text"
                onChange={change}
                defaultValue={data.localisation}
                name="localisation"
              />
              <br />
              <br />
              <label htmlFor="email">Capacité</label>
              <br />
              <input
                type="text"
                onChange={change}
                defaultValue={data.capacite}
                name="capacite"
              />
              <br />
              <br />
              <label htmlFor="prix">Prix journalier</label>
              <br />
              <input
                type="text"
                onChange={change}
                defaultValue={data.prix_i}
                name="prix_i"
              />
              <br />
              <br />
              <label htmlFor="prix">Status</label>
              <br />
              <input
                type="text"
                onChange={change}
                defaultValue={data.statut}
                name="statut"
              />
              <br />
              <br />
              <button type="submit">Confirmer</button>
            </form>
          }
        </>
      </div>
    </div>
  );
}

export default ModifierPosition;
