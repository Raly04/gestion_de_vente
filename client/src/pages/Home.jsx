import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../composant/Nav'


function Accueil() {
    const navigate = useNavigate()
  return (
    <>
        <Nav />
        <div className="contenu">
            <div className="txt1">
                <h1>
                    Arcade <br /> Agence voyage
                </h1>

                <div className="aide">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque ducimus obcaecati
                        deserunt quos corrupti in quidem aliquam quam itaque quaerat amet voluptatibus,
                        suscipit sed hic consequuntur minus accusantium nesciunt?
                    </p>
                        <button className='btn-send' onClick={()=>navigate("/pages/position")}>Voir Plus</button>
                </div>
            </div>

            <div className="image1">
                <img src="/assistant@2x.png" alt="" />
            </div>
        </div>


        <div className="contenu">
            <div className="txt1">
                <div className="section">
                    <h2>
                        Valeurs
                    </h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="aide">
                    <img src="/UseInfoCorr_Intro.png" alt="" />
                </div>
            </div>
            

            <div className="image1">
                <div className="section2">
                    <img src="/assistant-social-temoignage-850.jpg" alt="" />
                    <br />

                    <div className="vision">
                        <h2> VISION </h2>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="blur2"></div>
        <br />
        <br />
    </>
  )
}

export default Accueil