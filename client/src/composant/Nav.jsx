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
                <li className='inline-block'><a href="/pages/accueil">Accueil</a></li>
                <li className='inline-block'><a href="/pages/position">Position</a></li>
                <li className='inline-block'><a href="/faq">FAQ</a></li>
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



// import React from 'react'

// function Header() {
//   return (
//     <div class="header-title">
//         <header className='header2'>
//             <h1 className='logo'>LOGO</h1>
//             <nav>
//                 <ul className="list-nav">
//                     <li className='inline-block'><a href="/pages/accueil">Accueil</a></li>
//                     <li className='inline-block'><a href="/pages/position">Position</a></li>
//                     <li className='inline-block'><a href="/faq">FAQ</a></li>
//                 </ul>
//             </nav>
//         </header>
//         <br />
//     </div>
//   )
// }

// export default Header