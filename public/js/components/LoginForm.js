class LoginForm extends React.Component {
    
    state = {
        email: '',
        password: '',
        currentUser: {}
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
          localStorage.token = response.token
          this.setState({
            currentUser: response.currentUser,
            isLoggedIn: true,
            email: '',
            password: ''
          })
      })
      .catch(err => console.log(err))
      this.props.handeCurrentUser();
    }

    render () {
        return (
          <div>
            <h2>Log In</h2>
    
            <form>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' onChange={this.props.handleInput} />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={this.props.handleInput} />
                <input type="checkbox" id="show-password"/><label htmlFor="show-password">Show password</label>
              </div>
              <input value='Submit' type='submit' onClick={this.handleLogin} />
            </form>
          </div>
        )
      }
}