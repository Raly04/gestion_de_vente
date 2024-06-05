import React, { useEffect, useState } from 'react'
import Nav from '../composant/Nav'
import Footer from '../composant/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




function position() {

  const [data,setData] = useState([])
  useEffect(()=>
  {
    affiche()
  },[])

  const affiche = async () => {
    try {
      const response = await axios.get("http://localhost:5000/liste");
      console.log(response.data)
      const info = response.data
      setData(info)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
        <Nav />
            <div className="body7">
              <br />
                <form action="" className='search'><input type="text" placeholder='Recherchez votre budget' name='budget' /> <button type='submit'>Rechercher</button></form>
                <br />
                <br />
                {
                  data.map((item,id)=>
                  {
                    return(
                      <>
                        <div className="position" key={id}>
                            <h1><span>{item.nom_agence}</span></h1>
                            <h3 className='num'>Espace N°{item.numero}</h3>
                              <p>
                                  {item.localisation}
                              </p>
                            <br />
                            <h3><div className="icon"><FontAwesomeIcon icon={faUserCog} /></div> {item.capacite} personne</h3>
                            <br />
                            <h4><div className="icon"><FontAwesomeIcon icon={faMoneyBillAlt} /></div> {item.prix_j} Ar/j</h4>
                            <br />
                            {item.status === "libre" ? (
                                  <>
                                    <div className="status">{item.status}</div>
                                    <br />
                                    <button className='libre'>
                                      <a href={`/reserver/${item.id}`}>Reserver +</a>
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <div className="status">{item.status}</div>
                                    <br />
                                    <button className='occuper'>Déjà Reservé</button>
                                  </>
                                )}
                        </div>
                      </>
                    )
                  })
                }

            </div>

        <Footer />
    </div>
  )
}

export default position