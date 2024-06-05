import { useEffect, useState } from "react";
import Nav from "../composant/Nav";
import Footer from "../composant/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Position() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [budget, setBudget] = useState("");

  const ListePosition = async () => {
    try {
      const response = await axios.get("http://localhost:8080/position/getAll");
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    ListePosition();
  }, []);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (budget) {
      const filtered = data.filter((item) => item.prix_i <= budget);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div>
      <Nav />
      <div className="body7">
        <br />
        <form action="" className="search">
          <input
            type="text"
            placeholder="Recherchez votre budget"
            name="budget"
            value={budget}
            onChange={handleBudgetChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Rechercher
          </button>
        </form>
        <br />
        <br />
        {filteredData.map((item, id) => (
          <div className="position" key={id}>
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
            {item.statut === "libre" ? (
              <>
                <div className="status">{item.status}</div>
                <br />
                <button className="libre">
                  <a href={`/reserver/${item.id}`}>Reserver +</a>
                </button>
              </>
            ) : (
              <>
                <div className="status">{item.status}</div>
                <br />
                <button className="occuper">Déjà Reservé</button>
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Position;
