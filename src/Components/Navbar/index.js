import React from "react";
import "./style.css";
import '../../index.css'
import { Link } from "react-router-dom";
import logo_img from  '../../img/Gym.png'

const Navbar = () => {
    return(

        <div> 
          
          <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
    <div className="container container-fluid">
   <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
     data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
      aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
       <a className="navbar-brand" href="#!">
       <div className="content-icon">
      <img src={logo_img} />
       </div>
      </a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">home
          <span className="sr-only">(current)</span>
           </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/about" target="_self"> about </Link>
              </li>
               <li className="nav-item">
           <Link className="nav-link" to="/features" target="_self"> feature </Link>
           </li>
            <li className="nav-item">
           <Link className="nav-link" to="/info" target="_self">info</Link>
         </li>
           <li className="nav-item">
             <Link className="nav-link" to="/Contact" target="_self"> contact </Link>
              </li>
            
         </ul>
       </div>
     </div>
     </nav>


        </div>
    )
}
export default Navbar