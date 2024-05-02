 import { Link, NavLink } from "react-router-dom";
import logo from  "../assets/image/logobeauty.jpg";
import CartWidget from "./CartWidget";
/* "../assets/image/changes-logo.png"; */

const NavBar = () => {
    return (
        <div className="container-fluid">
                <div className="row bg-black p-3">
                    <div className="col"></div>
                    <div className="col-md text-center">
                        <Link to={"/"}>
                        <img src={logo} alt="CHANGES" width={190} /> 
                        </Link>
                    
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <CartWidget /> 
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/"}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/categoria/polleras"}>Polleras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/categoria/remeras"}>Remeras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-secondary text-uppercase textoNavbar"  to={"/categoria/sweaters"}>Sweaters</NavLink>
                            </li>
                        </ul>
                    </div>  
                 </div>
              </div>

    )
}

export default NavBar;    