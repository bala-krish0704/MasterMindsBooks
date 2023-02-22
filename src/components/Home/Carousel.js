export function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require('../Home/Images/carousel images/image1.png')} className="d-block w-100" height="500"alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>First slide label</h1>
                            <p></p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={require('../Home/Images/carousel images/image2.png')}className="d-block w-100" height="500"alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Second slide label</h1>
                            <p></p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={require('../Home/Images/carousel images/image3.png')} className="d-block w-100" height ="500"alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 >Third slide label</h1>
                            <p></p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}