import Nav from "../composant/Nav"
import { useNavigate } from 'react-router-dom'
import Contenu from "./Contenu";
import { useEffect, useState } from "react";
import axios from "axios";



function Payement() {
  const [data, setData] = useState([]);
  useEffect(() => {
    affiche();
  }, []);

  const affiche = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/payement/getAll"
      );
      const info = response.data;
      console.log(info);
      setData(info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <Contenu />
      <div className="body2">
        <h1 className="font-bold text-3xl">Historique des payements</h1>
        <hr />
        <table>
          <tr>
            <th>#</th>
            <th>Montant</th>
            <th>Description</th>
            <th>Numero</th>
            <th>Position</th>
            <th>Methode</th>
            <th>Date de payement</th>
          </tr>
          {data.map((item, id) => {
            return (
              <tbody key={id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.montant}</td>
                  <td>{item.description}</td>
                  <td>{item.numero}</td>
                  <td>{item.reservation.position.nom_agence}</td>
                  <td>{item.type}</td>
                  <td>{item.date}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  )
}

export default Payement