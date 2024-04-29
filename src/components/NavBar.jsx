import logo from  "../assets/image/logo-mudanzas-.jpg";
import CartWidget from "./CartWidget";
/* "../assets/image/changes-logo.png"; */

const NavBar = () => {
    return (
        <div className="container-fluid">
                <div className="row bg-black p-3">
                    <div className="col"></div>
                    <div className="col-md text-center">
                        <a href="#">
                        {<img src={logo} alt="CHANGES" width={190} /> }
                        
                        </a>
                    
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <CartWidget />
                    </div>
                </div>

                <div className="row"></div>
                    <div className="col"></div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">MUDANZAS ARGENTINAS HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">CONTACTO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">ORIGEN/DESTINO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">MURO DE CONSULTAS</a>
                            </li>
                        </ul>
                    </div>
    )
}

export default NavBar;    