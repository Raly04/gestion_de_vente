import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Mvola() {
  const [num,setNum] = useState("")
  const [sum,setSum] = useState(0)
  const [desc,setDesc] = useState("")
  const {id} = useParams()
  const s_id = JSON.parse(id)
  const navigate = useNavigate()
  useEffect(()=>{
    console.log("THE ID :" , s_id.id)
    console.log("TYPE : " ,s_id.t)
  },[])
  // const navigate = useNavigate()
  const save = async (e) => {
    e.preventDefault()
    try {
      const reservation = await axios.get(`http://localhost:8080/reservation/getById/${s_id.id}`)
      if((reservation?.data?.position?.prix_i /4)  > sum) {
        alert("Montant insuffisant")
        return
      }
      const res = await axios.post("http://localhost:8080/payement/save" , {
      reservation : reservation.data  ,
      montant : sum,
      numero : num,
      description : desc,
      type: s_id.t
    })
    if(res?.data) {
      alert("Paid succesfully")
      navigate("/pages/accueil")
    }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
        <div className="containers">
          <div className="mvola sect">
            <br />
            <br />
            <img src="/MVola_brand_new_vert-04.png" alt="" />
          </div>

          <div className="form sect">
            <form action="" method="post" onSubmit={(e)=>save(e)}>
              <label htmlFor="">Numero destinataire</label>
              <br />
              <input type="text" name=''  onChange={(e)=>setNum(e.target.value)} />
              <br />
              <br />
              <label htmlFor="" >Somme a transferer</label>
              <br />
              <input type="text" name='' onChange={(e)=>setSum(e.target.value)}/>
              <br />
              <br />
              <label htmlFor="">Description</label>
              <br />
              <input type="text" name='' onChange={(e)=>setDesc(e.target.value)}/>
              <br />
              <br />
              <br />
              <button>Envoyer</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default Mvola