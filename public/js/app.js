class App extends React.Component{
    state = {
        currentUser: {}
        
    }
      
    handleCurrentUser = (user) => {
        console.log(user)
        this.setState({
            currentUser: user
        })
    }
    

    render() {
        return(
        
        <div className="container">
            <NavBar />
            {/* <SignUpForm handleInput={this.handleInput} handleCurrentUser={this.handleCurrentUser}/> */}
            {/* <LoginForm handleInput={this.handleInput} handleCurrentUser={this.handleCurrentUser}/> */}
        </div>
        // 
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container')); 