import React, { useState } from 'react'
import  { Link } from 'react-router-dom'


const Header = () => {
    const [collapse, setCollapse] = useState('');


    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto text-center">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-taget="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="true" aria-lable="Toggle navigation">
                        <span className="navbar-toggler-icon"
                            onClick={ () => {
                                setCollapse()
                            }}
                            ></span>
                    </button>
                    <div className={
                        collapse()?
                        'collapse navbar-collapse show text-center' :
                        'collapse navbar-collapse'
                    }>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/"> All Student</Link>
                            </li>
                            <li className="nav-link" to="/add" > Add Student</li>
                        </ul>
                        
                    </div>

            </nav>

        </div>
    )

}
export default Header ; 
