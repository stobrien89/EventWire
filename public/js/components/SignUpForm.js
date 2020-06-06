

class SignUpForm extends React.Component {
  state = {
        email: '',
        password: '',
        confirm: '',
        first_name: '',
        last_name: '',
        street_address: '',
        city: '',
        state: '',
        number: '',
        image: '',
  }  

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSignUp = event => {
    event.preventDefault()
    if (this.state.password !== this.state.confirm) {
        return this.setState({
            email: '',
                password: '',
                confirm: '',
                first_name: '',
                last_name: '',
                street_address: '',
                city: '',
                state: '',
                number: 0,
                image: '',
                matchError: 'Passwords do not match'
        })
    }  
    fetch('/users/signup', {
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          street_address: this.state.street_address,
          city: this.state.city,
          state: this.state.state,
          number: this.state.number,
          image: this.state.image      
        }),
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
      }).then(response => response.json())
          .then(response => {
            localStorage.token = response.token;
            this.props.handleCurrentUser(response.newUser);
              this.setState({
                email: '',
                password: '',
                confirm: '',
                first_name: '',
                last_name: '',
                street_address: '',
                city: '',
                state: '',
                number: 0,
                image: '',
                loggedIn: true
              })
          })
          .catch(err => {
            console.log(err);
            this.setState({
                email: '',
                password: '',
                confirm: '',
                first_name: '',
                last_name: '',
                street_address: '',
                city: '',
                state: '',
                number: 0,
                image: '',
                error: 'User already exists'
            })
          })
  }
  
  render () {
      return (
        <div className="container-fluid container-height">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center">
                                <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
                                <h1>Register</h1>
                            </div>
                            <div className="card-body">
                                {this.state.matchError && <p>{this.state.matchError}</p>}
                                {this.state.error && <p>{this.state.error}</p>}
                                <form className="form-horizontal" onSubmit={this.handleSignUp}>

                                    <div className="form-group">
                                        <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="text" className="form-control" value={this.state.email} name="email" placeholder="Enter your Email" onChange={this.handleInput} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock fa" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter your Password" onChange={this.handleInput} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="username" class="cols-sm-2 control-label">Confirm Password</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-lock fa" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="password" class="form-control" value={this.state.confirm} name="confirm"  placeholder="Re-enter your Password" onChange={this.handleInput} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="first_name" className="cols-sm-2 control-label">First Name</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-user fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="text" className="form-control" value={this.state.first_name} name="first_name" placeholder="Enter your first name" onChange={this.handleInput} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="last_name" class="cols-sm-2 control-label">Last Name</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-user fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="text" class="form-control" value={this.state.last_name} name="last_name" placeholder="Enter your last name" onChange={this.handleInput} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street_address" className="cols-sm-2 control-label">Street Address</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-home fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="text" className="form-control" value={this.state.street_address} name="street_address" placeholder="Enter your street address" onChange={this.handleInput} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="cols-sm-2 control-label">City</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-home fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="text" className="form-control" value={this.state.city} name="city" placeholder="Enter your city" onChange={this.handleInput} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="cols-sm-2 control-label">State</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-home fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <select className="form-control" name="state" placeholder="Select your state" onChange={this.handleInput} required>
                                                    <option value="" disabled selected>Select your State</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="AL">Alabama</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DC">District of Columbia</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NY">New York</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WY">Wyoming</option>
                                                </select>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="form-group">
                                        <label htmlFor="number" className="cols-sm-2 control-label">Phone Number</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-phone fa-lg" aria-hidden="true">&nbsp;&nbsp;</i></span>
                                                <input type="text" className="form-control" value={this.state.number} name="number" placeholder="Enter your phone number" onChange={this.handleInput} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number" className="cols-sm-2 control-label">Image</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-image fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                <input type="text" className="form-control" value={this.state.image} name="image" placeholder="Enter a link to an image" onChange={this.handleInput} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group ">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Register</button>
                                    </div>
                                    <div className="login-register text-center">
                                        <p>Already have an account? <Link  to="/login">Log In</Link></p>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {this.state.loggedIn && <Redirect to="/"/>}
        </div>
      )
    }
  }
