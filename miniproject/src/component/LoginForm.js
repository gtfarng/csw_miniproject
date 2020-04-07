import React, { useState } from 'react'
import axios from 'axios';


const LoginForm = () => {

  const [username,setUsername] = useState('') ;
  const [password,setPassword] = useState(0) ; 

    const getLogin = async () => {
      
      
      getLogin() 
    }
    const loginPSU = async () => {
      const result = await axios.post(`http://159.192.142.113:8080/api/login` , {
        username , 
        password
      })
      getLogin()
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

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link" onClick={loginPSU} >Submit</button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}
export default LoginForm ;