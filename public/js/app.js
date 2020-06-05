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
    console.log(user)
    this.setState({
      currentUser: user
    })
  }

  render() {
    return (
      <div>
        <NavBar />

        <Route path="/login" render={props => <LoginForm handleCurrentUser={this.handleCurrentUser} />} />
        <Route path="/destination" component={List} />
        <Route path="/event" component={List} />
        <Route path="/itinerary" component={Itinerary} />
        <Route path="/signup" render={props => <SignUpForm handleCurrentUser={this.handleCurrentUser} />} />
        <Route path="/profile" component={UserProfile} />

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
