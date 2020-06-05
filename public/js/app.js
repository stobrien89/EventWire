class App extends React.Component {
  state = {
    currentUser: {},
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    street_address: '',
    city: '',
    state: '',
    number: 0,
    image: '',
    isLoggedIn: false,
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
        console.log(response)
        localStorage.token = response.token
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
          currentUser: response.newUser,
          isLoggedIn: true
        })
      })
      .catch(err => console.log(err))
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
  }



  render() {
    return (

      <div >
        <NavBar />
        {/* <SignUpForm handleInput={this.handleInput} handleSignUp={this.handleSignUp}/> */}
        {/* <LoginForm handleInput={this.handleInput} handleLogin={this.handleLogin}/> */}
        <List />
      </div>
      // 
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.root')); 