class App extends React.Component{
<<<<<<< HEAD
=======
    state = {
        currentUser: {}
        
    }
      
    handleCurrentUser = (user) => {
        console.log(user)
        this.setState({
            currentUser: user
        })
    }
    
>>>>>>> 807927a8632324a19415135bb4ca28c69417398e

    render() {
        return(
        <div>
            <NavBar />

            

            <Footer />
            {/* <SignUpForm handleInput={this.handleInput} handleCurrentUser={this.handleCurrentUser}/> */}
            {/* <LoginForm handleInput={this.handleInput} handleCurrentUser={this.handleCurrentUser}/> */}
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.root')); 