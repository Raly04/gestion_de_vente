import React from 'react'
import { useNavigate } from 'react-router-dom'


function Accueil() {
    const navigate = useNavigate()
  return (
    <>
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
                        <button className='btn-send' onClick={()=>navigate("Login")}>Voir Plus</button>
                </div>
            </div>

            <div className="image1">
                <img src="/Tak2-CMSTemplate_sqGSCzb.width-1500.jpg" alt="" />
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
                    <img src="/Lacuisine_resto.jpg" alt="" />
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


        <div className="informer">
            <br />
            <h2>Laissez nous votre email pour informer chaque nouvelle</h2>
            <br />
            <br />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Veritatis eos exercitationem consectetur, est necessitatibus magnam ducimus pariatur. 
                 Odit voluptas atque rem et aut.Eveniet, commodi sed? Assumenda veniam porro repudiandae?
            </p>
            <br />

            <form action="">
                <input type="text" placeholder='Entrez votre email' name='email' /> <button type='submit'>Restez informer </button>
            </form>
            <br />
        </div>
    </>
  )
}

export default Accueil