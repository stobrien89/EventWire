class EditForm extends React.Component {
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

    editUser = () => {
        event.preventDefault();
        fetch(`users/${this.props.currentUser._id}`, {
            body: JSON.stringify(this.props.currentUser),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}
        }).then(response => response.json().then(json => {
            this.props.handleCurrentUser();
        }))
    }

    render() {
        const {currentUser} = this.props;

        return (
            <div className="container">
                <h2>Edit profile information</h2>
  
                    <form>
                        <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' value={currentUser.email} onChange={this.handleInput} />
                        </div>
            
                        <div>
                        <label htmlFor='password'>Password</label>
                        <input type='text' name='password' value={currentUser.password} onChange={this.handleInput} />
                        </div>

                        <div>
                        <label htmlFor='password'>First Name</label>
                        <input type='text' name='first_name' value={currentUser.first_name} onChange={this.handleInput} />
                        </div>

                        <div>
                        <label htmlFor='last_name'>Last Name</label>
                        <input type='text' name='last_name' value={currentUser.last_name} onChange={this.handleInput} />
                        </div>

                        <div>
                        <label htmlFor='street_address'>Street Address</label>
                        <input type='text' name='street_address' value={currentUser.street_address} onChange={this.handleInput} />
                        </div>

                        <div>
                        <label htmlFor='city'>City</label>
                        <input type='text' name='city' value={currentUser.city} onChange={this.handleInput} />
                        </div>

                        <div>
                        <label htmlFor='state'>State</label>
                        <input type='text' name='state' value={currentUser.state} onChange={this.handleInput} />
                        </div>

                        <div>
                        <label htmlFor='number'>Phone Number</label>
                        <input type='text' name='number' value={currentUser.number} onChange={this.handleInput} />
                        </div> 
                        {/* parseInt number in handleSignUp */}

                        <div>
                        <label htmlFor='image'>Profile Picture</label>
                        <input type='text' name='image' value={currentUser.image} onChange={this.handleInput} />
                        </div>

                        <input value='Submit' type='submit' onClick={this.editUser} />
                    </form>
                        <input value="Delete Account" type="submit" onClick={this.props.deleteAccount}></input>
        </div>
        )
    }
}