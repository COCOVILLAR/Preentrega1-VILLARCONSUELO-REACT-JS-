const Carousel = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                 <img src="images/mangaslargasblancosinespalda.jpg" className="d-block img-fluid max-width: 80px" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/mangaslargasnegro.jpg" className="d-block img-fluid max-width: 80pz" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/mangaslargasblanco.jpg" className="d-block img-fluid max-width: 80px" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel; 