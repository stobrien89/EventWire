class NavBar extends React.Component {
    render() {
        return (
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom container">
                    <a className="navbar-brand" href="#">
                        <img src="https://trello-attachments.s3.amazonaws.com/5ed3f1e62bc09e6802c9d686/1000x305/7f03e0c29137fe583cebe990d0f287bf/ew-wordmark-p%401000x.png" width="250px" height="100px" alt="" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destinations">DESTINATIONS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">EVENTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/itinerary">ITINERARY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">SIGN UP</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

