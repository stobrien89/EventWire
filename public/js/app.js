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
    <Route path="/destination" component={List} />
    <Route path="/event" component={List} />
    <Route path="/itinerary" />
    <Route path="/signup" />
  </Router>,
  document.querySelector('.root')); 
