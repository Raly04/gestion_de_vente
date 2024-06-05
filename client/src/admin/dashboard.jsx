import React from 'react'
import Navbar from './Navbar'
import Contenu from './Contenu'



function dashboard() {
  return (
    <div>
        <div className="body2">
        {/* <Navbar /> */}
            <h1  className="font-bold text-3xl">
                dashboard
            </h1>
        </div>
        <Contenu />

    </div>
  )
}

export default dashboard