class UserProfile extends React.Component {
    render() {
        const {currentUser} = this.props;


        return (
            <div className="container-fluid container-height">
                <div className="container user-profile">
                <div className="row text-center profile-header">
                        <div className="col-md-12">
                            <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
                            <h1>Profile</h1>
                        </div>
                </div>
                <div className="profile-content">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt=""/>
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                        <h5>
                                            {currentUser.contact.first_name} {currentUser.contact.last_name}
                                        </h5>
                                        <h6>
                                            Here for a good time.
                                        </h6>
                                        <p className="profile-rating">Some other info</p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Itineraries</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-secondary" value="Edit Profile"><Link  to="/editprofile">Edit Profile</Link></button>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4">
                                <div class="profile-work">
                                    <h6>Joined On:</h6>
                                    <p>{currentUser.createdAt}</p>
                                    <h6>Completed Itineraries:</h6>
                                    <p>Itinerary details</p>
                                </div>
                            </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        {currentUser.contact.first_name} {currentUser.contact.last_name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        {currentUser.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Street Address</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        {currentUser.contact.address.street_address}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>City</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                    {currentUser.contact.address.city}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>State</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                    {currentUser.contact.address.state}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Phone Number</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        {currentUser.contact.number}
                                                    </p>
                                                </div>
                                            </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Stuff</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>stuff</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>About</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>stuff</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Itineraries</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>stuff</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>And</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>things</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Stuff</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>some stuff</p>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
        )
    }

}