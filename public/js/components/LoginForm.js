class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
    confirm: ''
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault();
    if (this.state.password !== this.state.confirm) {
        return this.setState({
            email: '',
            password: '',
            confirm: '',
            matchError: 'Passwords do not match'
        })
    }
    fetch('/users/login', {
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(response => {
      localStorage.token = response.token;
      this.props.handleCurrentUser(response.currentUser);
      this.setState({
        email: '',
        password: '',
        confirm: '',
        loggedIn: true
      })
    })
      .catch(err => {
          console.log(err);
          this.setState({
            email: '' ,
            password: '',
            confirm: '', 
            errorMessage: 'Incorrect Username or Password'
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
                                <div className="card-header text-center">Log In</div>
                                <div className="card-body">
                                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                                {this.state.matchError && <p>{this.state.matchError}</p>}
                                    <form className="form-horizontal" onSubmit={this.handleLogin}>

                                        <div className="form-group">
                                            <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                            <div className="cols-sm-10">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                    <input type="text" value={this.state.email} className="form-control" name="email" placeholder="Enter your Email" onChange={this.handleInput} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                                            <div className="cols-sm-10">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true">&nbsp;&nbsp;</i></span>
                                                    <input type="password" value={this.state.password} className="form-control" name="password" placeholder="Enter your Password" onChange={this.handleInput} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                                            <div className="cols-sm-10">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;</span>
                                                    <input type="password" value={this.state.confirm} className="form-control" name="confirm" placeholder="Confirm your Password" onChange={this.handleInput} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Log In</button>
                                        </div>
                                        <div className="login-register text-center">
                                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    {this.state.loggedIn && <Redirect to="/"/>}
            </div>
        </div>
        )
      }
}