

class SignUpForm extends React.Component {
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

            <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
          </form>
        </div>
      )
    }
  }