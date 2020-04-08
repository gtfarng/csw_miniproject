import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import '../App.css';
import ShowCovid from './ShowCovid'
import LoginForm from './LoginForm'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
     
      </header>

      <Router>
        <br/>
      <div>
        <nav><h5>
              <Link to="/"> index</Link> |
              <Link to="/login"> Login</Link> |
              <Link to="/home"> Home</Link> 
          


       </h5> </nav>

        <Route path="/" exact component={LoginForm} />
        <Route path="/login" exact component={ShowCovid} />
        <Route path="/home" exact component={ShowCovid} />
     
      </div>
    </Router>

<div>

</div>
<br/>
  <header className="App-header">
<footer class="page-footer font-small blue pt-4">

  <div class="footer-copyright text-center py-3">#GTfarng © 2019 :
    <a href="mailto:jatupat.pn@gmail.com"> Jatupat.pn@gmail.com</a>
  </div>

</footer><br/>
</header>
    </div>
  );
}

export default App;