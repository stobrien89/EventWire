const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const browserHistory = window.ReactRouterDOM.browserHistory;

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
        <div>
            <NavBar/>

            <Route path="/login" render={props => <LoginForm handleCurrentUser={this.handleCurrentUser}/>} />
            <Route path="/destinations"  />
            <Route path="/events"  />
            <Route path="/itinerary"  />
            <Route path="/signup" render={props => <SignUpForm handleCurrentUser={this.handleCurrentUser}/>}/>
            <Route path="/profile" render={props => <UserProfile currentUser={this.state.currentUser} />} />

            <Footer />
        </div>
        )
    }
}

ReactDOM.render(
   <Router>
        <Route path="/" component={App} />
    </Router>,
         document.querySelector('.root')); 