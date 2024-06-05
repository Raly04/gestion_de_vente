import React, { useState } from 'react'
// import Header from '../composant/Header'
import Footer from '../composant/Footer'
import { useRouter } from 'next/router';

function Login() {

    const [input, setInput] = useState({});
    const router = useRouter()

    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((val) => ({ ...val, [name]: value }));
    };

    const submit = (e) => {
        e.preventDefault();
            if (input.email === "admin@gmail.com" && input.mdp === "admin123") {
                alert("Connection successful");
                router.push("/admin/accueil")
            } else {
                alert("ERROR: Incorrect email or password");
            }
    };

  return (
        <div>
            {/* <Header /> */}
            <br />
            <br />
            <br />
            <div className="connect">
                <h1 className="font-bold text-3xl">Se connecter</h1>
                <br />
                <br />
                <div className="login">
                    <div className="image">
                        <img src="/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="" />
                    </div>
                    <form action="" onSubmit={submit}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <label htmlFor="">Email</label>
                        <br />
                        <input type="text" onChange={change} name='email' />
                        <br />
                        <br />
                        <label htmlFor="">Mot de passe</label>
                        <br />
                        <input type="password" onChange={change} name='mdp' />
                        <br />
                        <br />
                        <button>Confirmer</button>
                    </form>
                </div>
            </div>
            
            {/* <Footer /> */}
        </div>
  )
}

export default Login