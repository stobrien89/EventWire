const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

class App extends React.Component {
  state = {
    currentUser: {}
  }

  handleCurrentUser = (user) => {
    delete user.password;
    this.setState({
      currentUser: user
    })
  }

  isLoggedIn = () => {
    if (this.state.currentUser) {
      return true
    }
    return false
  }

  handleLogout = () => {
    this.setState({
      currentUser: {}
    })
    localStorage.clear();
  }
  
  setItinerary = (id) => {
    this.setState({
      ...this.state.currentUser, itinerary:id
    })
  }

  getItinerary = () => {
    return this.state.currentUser.itinerary
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        <Feature />

        <Route path="/login" render={props => <LoginForm handleCurrentUser={this.handleCurrentUser} />} />
        <Route path="/destination" component={List} />
        <Route path="/event" component={List} />
        <Route path="/itinerary" render={props => <Itinerary currentUser={this.state.currentUser} setItinerary={this.setItinerary}/>} />
        {/* <Route path="/itinerary_events" component={ItineraryEvents} /> */}
        <Route path="/itinerary_view" component={ItineraryView} />
        <Route path="/signup" render={props => <SignUpForm handleCurrentUser={this.handleCurrentUser} />} />
        <Route path="/profile" render={props => <UserProfile currentUser={this.state.currentUser}/>} />
        <Route path="/editprofile" render={props => <UserEditForm handleCurrentUser={this.handleCurrentUser} currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>} />

        <Route path="/event_details" component={Event} />
        <Route path="/destination_details" component={Destination} />
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
