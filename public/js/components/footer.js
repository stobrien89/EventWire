class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <a className="nav-item text-dark" href="/home">ABOUT</a>
                            <a className="nav-item text-dark" href="/home">TERMS & CONDITIONS</a>
                            <a className="nav-item text-dark" href="/home">CUSTOMER SUPPORT</a>
                            <a className="nav-item text-dark" href="/home"><i className="fab fa-facebook-square"></i></a>
                            <a className="nav-item text-dark" href="/home"><i className="fab fa-instagram"></i></a>
                            <a className="nav-item text-dark" href="/home"><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div className="copyright">
                                <p>Copyright © 2020 EventWire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}