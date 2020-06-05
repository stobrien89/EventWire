class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mr-auto">
                            <a class="nav-item nav-link active" href="#">HOME</a>
                            <a class="nav-item nav-link active" href="/destinations">DESTINATION</a>
                            <a class="nav-item nav-link active" href="/events">EVENTS</a>
                            <a class="nav-item nav-link active" href="#">LOGIN</a>
                            <a class="nav-item nav-link active" href="#">LOGIN</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}