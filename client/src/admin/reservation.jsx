/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Contenu from "./Contenu";
import axios from "axios";

function reservation() {
  const [data, setData] = useState([]);
  const [Email, setEmail] = useState("");

  useEffect(() => {
    affiche();
  }, []);

  const affiche = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/reservation/getAll"
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
        <h1 className="font-bold text-3xl">Historique de reservation passé</h1>
        <hr />
        <table>
          <tr>
            <th>#</th>
            <th>Email du client qui a réservé</th>
            <th>ID Place</th>
            <th>Date debut</th>
            <th>Date fin</th>
            <th>Date reservation</th>
          </tr>
          {data.map((item, id) => {
            return (
              <tbody key={id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.user.email}</td>
                  <td>{item.position.id}</td>
                  <td>{item.date_deb}</td>
                  <td>{item.date_fin}</td>
                  <td>{item.date_res}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default reservation;
