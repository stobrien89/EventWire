

class SignUpForm extends React.Component {
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
        isLoggedIn: false
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
    this.props.handleCurrentUser();
  }
  
  render () {
      return (
        <div>
          <h2>Sign Up</h2>
  
          <form>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' onChange={this.props.handleInput} />
            </div>
  
            <div>
              <label htmlFor='password'>Password</label>
              <input type='text' name='password' onChange={this.props.handleInput} />
            </div>

            <div>
              <label htmlFor='password'>First Name</label>
              <input type='text' name='first_name' onChange={this.props.handleInput} />
            </div>

            <div>
              <label htmlFor='last_name'>Last Name</label>
              <input type='text' name='last_name' onChange={this.props.handleInput} />
            </div>

            <div>
              <label htmlFor='street_address'>Street Address</label>
              <input type='text' name='street_address' onChange={this.props.handleInput} />
            </div>

            <div>
              <label htmlFor='city'>City</label>
              <input type='text' name='city' onChange={this.props.handleInput} />
            </div>

            <div>
              <label htmlFor='state'>State</label>
              <input type='text' name='state' onChange={this.props.handleInput} />
            </div>

            <div>
              <label htmlFor='number'>Phone Number</label>
              <input type='text' name='number' onChange={this.props.handleInput} />
            </div> 
            {/* parseInt number in handleSignUp */}

            <div>
              <label htmlFor='image'>Profile Picture (optional)</label>
              <input type='text' name='image' onChange={this.props.handleInput} />
            </div>

            <input value='Submit' type='submit' onClick={this.handleSignUp} />
          </form>
        </div>
      )
    }
  }