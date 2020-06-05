class LoginForm extends React.Component {
    
    state = {
        email: '',
        password: '',
    }
    
    handleInput = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleLogin = event => {
        event.preventDefault();
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
          console.log(response)
            localStorage.token = response.token;
          this.props.handleCurrentUser(response.currentUser);
          this.setState({
            email: '',
            password: '',
            loggedIn: true
          })
      })
      .catch(err => console.log(err))
    }

    render () {
        return (
        //   <div className="container">
        //     <h2>Log In</h2>
    
        //     <form>
        //       <div>
        //         <label htmlFor='email'>Email</label>
        //         <input type='text' name='email' onChange={this.handleInput} />
        //       </div>
        //       <div>
        //         <label htmlFor='password'>Password</label>
        //         <input type='password' name='password' onChange={this.handleInput} />
        //         <input type="checkbox" id="show-password"/><label htmlFor="show-password">Show password</label>
        //       </div>
        //       <input value='Submit' type='submit' onClick={this.handleLogin} />
        //     </form>
        //     {this.state.loggedIn && <Redirect to="/"/>}
        //   </div>

        <div className="container">
            <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Log In</div>
                            <div className="card-body">

                                <form className="form-horizontal" onSubmit={this.handleLogin}>

                                    <div className="form-group">
                                        <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                <input type="text" className="form-control" name="email" placeholder="Enter your Email" onChange={this.handleInput} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="password" className="form-control" name="password" placeholder="Enter your Password" onChange={this.handleInput} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="password" className="form-control" placeholder="Confirm your Password" onChange={this.handleInput} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group ">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Log In</button>
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