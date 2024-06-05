import React from 'react'

function Navbar() {
  return (
    <>
        <div className="container_head">
          <header  className="header">
            <div className="logo">
              <img src="/istockphoto-1432067104-1024x1024.jpg" alt="" />
            </div>

            <div className="navbar">
              <ul>
                <li><a href="/valorisation">Accueil</a></li>
                <li><a href="/Login">Se connecter</a></li>
                <li><a href="/inscrire">S'inscrire</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </header>
        </div>
        <br />
        <br />
        <br />
    </>
  )
}

export default Navbar