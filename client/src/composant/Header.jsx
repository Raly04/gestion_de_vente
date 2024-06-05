import React from 'react'

function Header() {
  return (
    <div className='head'>
        <header className='header1'>
            <h1 className='logo'>LOGO</h1>
            <nav>
                <ul>
                    <li className='inline-block'><a href="/">Accueil</a></li>
                    <li className='inline-block'><a href="/inscrire">S'inscrire</a></li>
                    <li className='inline-block'><a href="/Login">Se connecter</a></li>
                    {/* <li className='inline-block'><a href="/faq">FAQ</a></li> */}
                </ul>
            </nav>
        </header>
        <br />
    </div>
  )
}

export default Header