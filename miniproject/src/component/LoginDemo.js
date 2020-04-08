import React from 'react';
import axios from 'axios';
export default class LoginDemo extends React.Component {
  state = {
    username: '',
    password : ''
    
  }
  handleChange = event => {
    // this.setState({ username: event.target.value });
    // this.setState({password: event.target.value});
    console.log("handlechange")
  }
  handleSubmit = event => {
    // event.preventDefault();
    //   const username = this.state.username
    //   const password = this.state.password

    // console.log(username)
    axios.post(`http://100.0.0.100:8080/api/login`, { username:'5835512110' , password:'ball.0854702811' })
      .then(res => {
        console.log(res);
      })
  }
  api = event =>{
    axios.post(`http://100.0.0.100:8080/api/login`, { username:'5835512110' , password:'ball.0854702811' })
      .then(res => {
        console.log(res);
      })
  }
  render() {
    return (
      <div>
       
          <button type="submit" onChange={this.api} >Add</button>
  
      </div>
    )
  }
}