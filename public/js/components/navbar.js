class NavBar extends React.Component {
    render() {
        return (
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom container">
                    <a className="navbar-brand" href="#">
                        <img src="/img/eventWire-logos/1000w/ew-logo-p-notag@1000x.png" width="300px" height="100px" alt=""/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME<span class="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destination">DESTINATIONS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/event">EVENTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/itinerary">ITINERARY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{
                                    pathname: '/signup',
                                    state: { handleCurrentUser: 'hi' }
                                }}>SIGN UP</Link>
                            </li>
                        </ul>
                    </div>

                {/* <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <p>DELETE THESE BUTTONS</p> */}
                </nav>
            </header>
        )
    }
}

