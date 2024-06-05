import Nav from "../composant/Nav"
import { useNavigate, useParams } from 'react-router-dom'



function Payement() {
  const navigate = useNavigate()
  const {id} = useParams()
  const telma = {t : "MVOLA" , id : id}
  const airtel = {t : "AIRTEL" , id : id}
  const orange = {t : "ORANGE" , id : id}
  return (
    <div>
        <Nav />
        <div className="container">
          <div className="operateur">
            <img src="/MVola_brand_new_vert-04.png" alt=""  onClick={()=>navigate(`/payement/mobile-money/${JSON.stringify(telma)}`)} width={400}/>
            <img src="/Orange-Money-recrute-pour-ce-poste-03-Mars-2023.png" alt="" onClick={()=>navigate(`/payement/orange-money/${JSON.stringify(orange)}`)} width={400} />
            <img src="/49YTv0_o_400x400.png" alt=""  onClick={()=>navigate(`/payement/airtel-money/${JSON.stringify(airtel)}`)} width={400}/>
          </div>
        </div>
    </div>
  )
}

export default Payement