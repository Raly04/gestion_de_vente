import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({});
  const router = useNavigate();

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((val) => ({ ...val, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/user/auth", input);
      console.log("userData :", input);
      if (res?.data?.id) {
        const userInfo = {
          nom: res.data.nom,
          id: res.data.id,
          email: res.data.email,
        };
        localStorage.setItem("infoUser", JSON.stringify(userInfo));
        router("/pages/accueil");
      } else {
        alert(res.data.error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="connect">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="login">
          <form action="" onSubmit={submit}>
            <br />
            <h3>Connectez vous maintenant !</h3>
            <br />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" onChange={change} name="email" />
            <br />
            <br />
            <label htmlFor="">Mot de passe</label>
            <br />
            <input type="password" onChange={change} name="mdp" />
            <br />
            <br />
            <button>Confirmer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
