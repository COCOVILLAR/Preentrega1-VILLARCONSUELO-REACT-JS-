import camion1 from "../assets/image/camion1.jpg";
import camion3 from "../assets/image/camion3.jpg";
import trafic4 from "../assets/image/trafic4.png";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img src={camion1} alt="" className="img-fluid" />
                </div>
                <div className="col text-center">
                    <img src={camion3} alt="" className="img-fluid" />
                </div>
                <div className="col text-center">
                    <img src={trafic4} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>

    )
}

export default Banner;