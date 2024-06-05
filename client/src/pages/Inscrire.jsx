import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inscrire() {
  const router = useNavigate();
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("userData", JSON.stringify(input));
      if (input.mdp === input.mdp2) {
        console.log("userData : ", input);
        await axios
          .post("http://localhost:8080/user/save", input)
          .then(function (response) {
            if (response.data) {
              alert("Insérer avec succès");
              router("/Login");
            } else {
              alert("Erreur d'insertion ...");
            }
          });
      } else {
        alert("Votre mot de n'est pas identique");
      }
    } catch (error) {
      console.log("Erreur d'inscription...", error);
    }
  };

  return (
    <div>
      <div className="sign-in">
        <div className="inscrit">
          <form onSubmit={handleSubmit}>
            <br />
            <br />
            <h1>Inscription</h1>
            <br />
            <label htmlFor="nom">Nom et prenom</label>
            <br />
            <input type="text" onChange={handleChange} name="nom" required />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" onChange={handleChange} name="email" required />
            <br />
            <label htmlFor="email">Numero tel</label>
            <br />
            <input type="text" onChange={handleChange} name="tel" />
            <br />
            <label htmlFor="mdp">Mot de passe</label>
            <br />
            <input
              type="password"
              onChange={handleChange}
              name="mdp"
              required
              maxLength={20}
            />
            <br />
            <label htmlFor="mdp2">Confirmation de mot de passe</label>
            <br />
            <input
              type="password"
              onChange={handleChange}
              name="mdp2"
              required
              maxLength={20}
            />
            <br />
            <br />

            <div className="link">
              <p>
                Deja un compte ? <a href="/Login">veillez se connecter .</a>
              </p>
              <button type="submit">S'inscrire</button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Inscrire;
