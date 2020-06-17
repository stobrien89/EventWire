class NavBar extends React.Component {
    render() {
        return (
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom container">
                    <a className="navbar-brand" href="/home">
                        <img src="/img/eventWire-logos/1000w/ew-logo-p-notag@1000x.png" width="300px" height="100px" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item text-primary">
                                <Link className="nav-link" to="/home">HOME<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item text-primary">
                                <Link className="nav-link" to="/destination">DESTINATIONS</Link>
                            </li>
                            <li className="nav-item text-primary">
                                {/* {this.props.currentUser.email ?  */}
                                {isUserLoggedIn() ?
                                    <a className="nav-link" onClick={this.props.handleLogout}>LOG OUT</a> :
                                    <Link className="nav-link" to="/login">LOG IN</Link>}
                            </li>
                            {isUserLoggedIn() &&
                                <li className="nav-item text-primary">
                                    <Link className="nav-link" to="/itinerary">ITINERARY</Link>
                                </li>}
                            <li className="nav-item text-primary">
                                {/* {this.props.currentUser.email ?  */}
                                {isUserLoggedIn() ?
                                    <Link className="nav-link" to="/profile">PROFILE</Link> : <Link className="nav-link" to="/signup">SIGN UP</Link>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

