class Feature extends React.Component {
    render () {
        return (
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousNameelExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://noirbnb.com/uploads/1578114469.jpg" height="300px" alt="First slide"/>
                            <div className="carousel-caption d-none d-sm-block text-right">
                                <p>Experience the Miami Nightlife!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://channeloneatlanta.files.wordpress.com/2012/09/nightlife.jpg" height="300px"  alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://sailo.s3.amazonaws.com/media/events/2019/hornblower-sensation-nyc-statue-2-resized_Mk5shEX.jpg" height="300px" alt="Third slide"/>
                            <div className="carousel-caption d-none d-sm-block text-right ">
                                <p>Dinner Cruise</p>
                                <p className="blockquote-footer">New York City, NY</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container mt-5">
                        <p>
                            EventWire, based in Denver, CO, is an event planning company that organize occasions such as birthday parties, bachelor/bachelorette parties, anniversary's, vacations. If you have an event/occasion, we can make it unforgettable!
                        </p>
                    </div>
            </div>
        )
    }
}