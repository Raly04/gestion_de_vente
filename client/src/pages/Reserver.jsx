import { useEffect, useState } from "react";
import Nav from "../composant/Nav";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Reserver() {
  const [input, setInput] = useState([]);
  const [data, setData] = useState([]);
  const [prix, setPrix] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const information = localStorage.getItem("infoUser");
  const utilisateur = JSON.parse(information);
  const id_user = utilisateur.id;

  const condition = () => {
    const message = `Vous devez payer 25% de loyer ,avant que votre reservation soit annulé.  Merci!`;
    Swal.fire({
      title: "Informations sur la reservation position",
      html: message,
      icon: "info",
    });
  };

  useEffect(() => {
    condition();
    afficherInfo();
    //getPrix_j();
  }, []);

  // const getPrix_j = async () => {
  //   const result = await axios.get(`http://localhost:5000/mono/${id}`);
  //   console.log(result.data);
  //   const info = result.data;
  //   const prix_j = info.prix_j;
  //   setPrix(prix_j);
  //   console.log("Notre prix : ", prix_j);
  // };

  const change = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({
      ...values,
      [name]: value,
      id_place: id,
      id_user: id_user,
      prix_j: prix,
    }));
  };

  const afficherInfo = async () => {
    console.log("Current id :", id);
    const reponse = await axios.get(
      `http://localhost:8080/position/getById/${id}`
    );
    console.log(reponse.data);
    const info = reponse.data;
    setData(info);
    setPrix(info.prix_i);
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("Reservation Data :", input);
    await axios
      .post("http://localhost:8080/reservation/save", input)
      .then(function (response) {
        if (response.status == 201) {
          alert("Execution de reservation est fait avec success");
          navigate(`/payement/${response.data.id}`);
        } else {
          alert(response.data);
        }
      });
    console.log(input);
  };

  return (
    <div>
      <Nav />
      <div className="body8">
        <h1 className="titre2">Reserver position</h1>
        <br />
        {
          <form className="reserver" key={data.id} onSubmit={submit}>
            <br />
            <br />
            <input
              type="text"
              name="id_place"
              defaultValue={`${data.id}`}
              style={{ display: "none" }}
            />
            <label htmlFor="nom">Nom de l'agence</label>
            <br />
            <input
              type="text"
              onChange={change}
              defaultValue={`${data.nom_agence}`}
              name="nom_agence"
              readOnly
            />
            <br />
            <br />
            <label htmlFor="Numero">Numero d'espace</label>
            <br />
            <input
              type="text"
              onChange={change}
              defaultValue={`${data.numero}`}
              name="numero"
              readOnly
            />
            <br />
            <br />
            <label htmlFor="nom">Localisation</label>
            <br />
            <input
              type="text"
              onChange={change}
              defaultValue={`${data.localisation}`}
              name="localisation"
              readOnly
            />
            <br />
            <br />
            <label htmlFor="email">Capacité</label>
            <br />
            <input
              type="text"
              onChange={change}
              defaultValue={`${data.capacite}`}
              name="capacite"
              readOnly
            />
            <br />
            <br />
            <label htmlFor="prix">Prix journalier</label>
            <br />
            <input
              type="text"
              onChange={change}
              defaultValue={`${data.prix_i}`}
              name="prix_i"
              readOnly
            />
            <br />
            <br />
            <label htmlFor="date">Date debut evenement</label>
            <br />
            <input type="date" onChange={change} name="date_deb" required />
            <br />
            <br />
            <label htmlFor="date">Date fin evenement</label>
            <br />
            <input type="date" onChange={change} name="date_fin" required />
            <br />
            <br />
            <button type="submit">Confirmer la reservation</button>
          </form>
        }
      </div>
    </div>
  );
}

export default Reserver;
