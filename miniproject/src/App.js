import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Index from './component/Index'
import LoginForm from './component/LoginForm'
import LoginDemo from './component/LoginDemo'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
     
      </header>

      <Router>
        <br/>
      <div>
   

        <Route path="/" exact component={LoginForm} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/login/sucsess" export component={Index} />
        
     
      </div>
    </Router>

<div>

</div>
<br/>
  <header className="App-header">
<footer class="page-footer font-small blue pt-4">

  <div class="footer-copyright text-center py-3">#ballboo088 © 2020 

  </div>

</footer><br/>
</header>
    </div>
  );
}

export default App;