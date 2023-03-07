

function Carrusel() {
    return(
        <div id="carouselExample" className="carousel slide container">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.arom.es/wp-content/uploads/montaje-inicio-1.png" className="d-block w-100" alt="Imágenes de artículos de limpieza"/>
            </div>
            <div className="carousel-item">
                    <img src="https://www.arom.es/wp-content/uploads/montaje-inicio-1.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                    <img src="https://www.arom.es/wp-content/uploads/montaje-inicio-1.png" className="d-block w-100" alt="..."/>
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
 )
}

export default Carrusel;