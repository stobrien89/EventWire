class Footer extends React.Component {
    render () {
        return (
            <footer className="container-fluid">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <a className="nav-item" href="#">ABOUT</a>
                            <a className="nav-item" href="#">TERMS & CONDITIONS</a>
                            <a className="nav-item" href="#">CUSTOMER SUPPORT</a>
                            <a className="nav-item" href="#"><i class="fab fa-facebook-square"></i></a>
                            <a className="nav-item" href="#"><i class="fab fa-instagram"></i></a>
                            <a className="nav-item" href="#"><i class="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12"> 
                            <div className="copyright">
                                Copyright © 2020 EventWire
                            </div>    
                        </div>
                    </div> 
                </div>
            </footer>
        )
    }
}