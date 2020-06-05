

class SignUpForm extends React.Component {
  state = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        street_address: '',
        city: '',
        state: '',
        number: 0,
        image: '',
  }  

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSignUp = event => {
    event.preventDefault()
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
          .catch(err => console.log(err))
  }
  
  render () {
      return (
        // <div className="container">
        //   <h2>Sign Up</h2>
  
        //   <form>
        //     <div>
        //       <label htmlFor='email'>Email</label>
        //       <input type='text' name='email' onChange={this.handleInput} />
        //     </div>
  
        //     <div>
        //       <label htmlFor='password'>Password</label>
        //       <input type='text' name='password' onChange={this.handleInput} />
        //     </div>

        //     <div>
        //       <label htmlFor='password'>First Name</label>
        //       <input type='text' name='first_name' onChange={this.handleInput} />
        //     </div>

        //     <div>
        //       <label htmlFor='last_name'>Last Name</label>
        //       <input type='text' name='last_name' onChange={this.handleInput} />
        //     </div>

        //     <div>
        //       <label htmlFor='street_address'>Street Address</label>
        //       <input type='text' name='street_address' onChange={this.handleInput} />
        //     </div>

        //     <div>
        //       <label htmlFor='city'>City</label>
        //       <input type='text' name='city' onChange={this.handleInput} />
        //     </div>

        //     <div>
        //       <label htmlFor='state'>State</label>
        //       <input type='text' name='state' onChange={this.handleInput} />
        //     </div>

        //     <div>
        //       <label htmlFor='number'>Phone Number</label>
        //       <input type='text' name='number' onChange={this.handleInput} />
        //     </div> 
        //     {/* parseInt number in handleSignUp */}

        //     <div>
        //       <label htmlFor='image'>Profile Picture (optional)</label>
        //       <input type='text' name='image' onChange={this.handleInput} />
        //     </div>

        //     <input value='Submit' type='submit' onClick={this.handleSignUp} />
        //   </form>
        //   {this.state.loggedIn && <Redirect to="/"/>}
        // </div>

        <div className="container">
        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">Register</div>
                                    <div className="card-body">
        
                                        <form className="form-horizontal" onSubmit={this.handleSignUp}>
        
                                            <div className="form-group">
                                                <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" name="email" placeholder="Enter your Email" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="password" className="cols-sm-2 control-label">Password</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                        <input type="password" className="form-control" name="password" placeholder="Enter your Password" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="username" class="cols-sm-2 control-label">Confirm Password</label>
                                                <div class="cols-sm-10">
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                                        <input type="password" class="form-control"  placeholder="Re-enter your Password" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="first_name" className="cols-sm-2 control-label">First Name</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" name="first_name" placeholder="Enter your first name" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="last_name" class="cols-sm-2 control-label">Last Name</label>
                                                <div class="cols-sm-10">
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                        <input type="text" class="form-control" name="last_name" placeholder="Enter your last name" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="last_name" className="cols-sm-2 control-label">Street Address</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" name="street_address" placeholder="Enter your street address" onChange={this.handleInput}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="last_name" className="cols-sm-2 control-label">City</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" name="city" placeholder="Enter your city" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="last_name" className="cols-sm-2 control-label">State</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                        <select className="form-control" name="state" placeholder="Select your state" onChange={this.handleInput}>
                                                          <option value="">Select your State</option>
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
                                                <label for="number" className="cols-sm-2 control-label">Phone Number</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" name="number" placeholder="Enter your phone number" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="number" className="cols-sm-2 control-label">Image</label>
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" name="image" placeholder="Enter a link to an image" onChange={this.handleInput} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Register</button>
                                            </div>
                                            <div className="login-register">
                                                <a href="index.php">Login</a>
                                            </div>
                                        </form>
                                    </div>
        
                                </div>
                            </div>
                        </div>
        </div>
      )
    }
  }
