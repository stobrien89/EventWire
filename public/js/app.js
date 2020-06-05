const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const browserHistory = window.ReactRouterDOM.browserHistory;

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

ReactDOM.render(
   <Router>
    <Route path="/" component={App} />
    <Route path="/login" component={LoginForm} />
    <Route path="/destinations"  />
    <Route path="/events"  />
    <Route path="/itinerary"  />
    <Route path="/signup"  />
    {/* <Route component={App} /> */}
    </Router>,
         document.querySelector('.root')); 