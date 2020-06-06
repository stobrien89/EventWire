class UserProfile extends React.Component {
    render() {
        const {currentUser} = this.props;


        return (
            <div className="container-fluid container-height">
                <div className="container emp-profile">
                <form method="post">
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
                                            User's Name{/* {currentUser.contact.first_name} {currentUser.contact.last_name} */}
                                        </h5>
                                        <h6>
                                            Some description?
                                        </h6>
                                        <p className="proile-rating">Some other info</p>
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
                            <button className="profile-edit-btn" name="btnAddMore" value="Edit Profile"><Link  to="/editprofile">Edit Profile</Link></button>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4">
                                <div class="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="">Website Link</a><br/>
                                    <a href="">Bootsnipp Profile</a><br/>
                                    <a href="">Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a href="">Web Designer</a><br/>
                                    <a href="">Web Developer</a><br/>
                                    <a href="">WordPress</a><br/>
                                    <a href="">WooCommerce</a><br/>
                                    <a href="">PHP, .Net</a><br/>
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
                                                        {/* {currentUser.contact.first_name} {currentUser.contact.last_name} */}
                                                        User's name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        {/* {currentUser.email} */}
                                                        user's email
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Street Address</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        user's street address
                                                        {/* {currentUser.contact.address.street_address} */}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>City</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                    User's city {/* {currentUser.contact.address.city} */}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>State</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        User's state{/* {currentUser.contact.address.state} */}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        User's number{/* {currentUser.contact.number} */}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Joined On:</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Joined on date</p>
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
                </form>           
            </div>
        </div>
        )
    }

}