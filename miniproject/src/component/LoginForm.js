import React, { useState } from 'react'
import axios from 'axios';
import  { redirect } from 'react-router-dom' ;

const LoginForm = () => {

  const [username,setUsername] = useState('') ;
  const [password,setPassword] = useState('') ; 

    const getLogin = async () => {
      
      console.log("Yech !!!")
    }
    const loginPSU = async () => {
      axios.post(`http://100.0.0.100:8080/api/login` , {
        username , 
        password
      }).then(res => {
        console.log(res)
      })

      //this.setstate({redirect: "/login/sucsess"})
      //getLogin()
    }

    return (
        <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <form>
              <div className="field">
                <label className="label">PSU Passport</label>
                <div className="control">
                  <input className="input" type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <div  align="center">
                <div >
                  <button className="button is-link "  onClick={getLogin} >Submit</button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}
export default LoginForm ;