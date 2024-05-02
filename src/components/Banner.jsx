import { Link } from "react-router-dom";
import corsetblanco from "../assets/image/corsetblanco.jpg";
import mangalargasrosa from "../assets/image/mangalargasrosa.jpg";
import sinhombro from "../assets/image/sinhombro.jpg"; 
import polleranegra from "../assets/image/polleranegra.jpg";
import abrigo from "../assets/image/abrigo.jpg"

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${polleranegra})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <Link to={"/categoria/polleras"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Polleras</span>
                    </Link>
                </div>
                
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${abrigo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/categoria/sweaters"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Sweaters</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${mangalargasrosa})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <Link to={"/categoria/remeras"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Remeras</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;