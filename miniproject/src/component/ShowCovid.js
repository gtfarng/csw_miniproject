import React, {useState, useEffect }  from 'react'
// import showCovid from './component/showCovid'
// import LoginForm from './component/LoginForm'
import axios from 'axios'
import './ShowCovid.css'

const App = () => {

  const [covid, setCovid] = useState([]);

  const getCovid = async () => {
      const result = await axios.get("https://covid19-cdn.workpointnews.com/api/constants.json?fbclid=IwAR17AyOF8RpDNaxZTHKrFwUb_jkvwraftPKTniiG00K3jcK8UrKSvkQTV6w")
      setCovid(result.data)
  }
  
  useEffect(() => {
    getCovid() 
  },[])

  return(
    <div>
      <h2>Covid Tracker Thailand</h2>
      <div className = "container text-center" > 
      <div className = "card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm" >
            <div className="card-header" style={{textAlign:"center", paddingLeft:"100px"}}>
              <h6 >ผู้ติดเชื้อในประเทศไทย</h6></div>
            <div className="card-body ">
              < h5 className="card-title">{covid.ผู้ติดเชื้อ}</h5>
            </div>
          </div>
    
          <div className="card mb-4 shadow-sm" >
            <div className="card-header" style={{textAlign:"center", paddingLeft:"145px"}}>
              <h6>หายแล้ว </h6></div>
            <div className="card-body">
              < h5 className="card-title">{covid.หายแล้ว}</h5>
            </div>
          </div> 
  
          <div className="card border mb-4 shadow-sm" >
            <div className="card-header"style={{textAlign:"center", paddingLeft:"140px"}}> เสียชีวิตแล้ว </div>
            <div className="card-body">
              < h5 className="card-title">{covid.เสียชีวิต}</h5>
            </div>
          </div>  
     
        </div>
        </div>
        <div className="col">อัพเดตเมื่อ : {covid.เพิ่มวันที่}</div>
      
    </div>
  )


}
export default App;