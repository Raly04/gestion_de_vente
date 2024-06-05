import React from 'react'

function Navbar() {
  return (
    <>
        <div className="container_head">
          <header  className="header">
            <div className="logo">
              <img src="/logo.jpg" alt="" />
            </div>
            <div className="navbar">
              <ul>
                  <li className='inline-block'><a href="/admin/home">Accueil</a></li>
                  <li className='inline-block'><a href="./dashboard">Dashboard</a></li>
                  <li className='inline-block'><a href="">FAQ</a></li>
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
