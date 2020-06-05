class NavBar extends React.Component {
    render () {
        return (
            <header class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light navbar-custom container">
                    <a class="navbar-brand" href="#">
                        <img src="https://trello-attachments.s3.amazonaws.com/5ed3f1e62bc09e6802c9d686/1000x305/7f03e0c29137fe583cebe990d0f287bf/ew-wordmark-p%401000x.png" width="200px" height="75px" alt=""/>
                    </a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link " href="#">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">DESTINATIONS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">EVENTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">LOGIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CART</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}