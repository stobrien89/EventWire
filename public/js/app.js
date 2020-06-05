class App extends React.Component{
    
    render() {
        return(
        <div>
            <NavBar />

            

            <Footer />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.root')); 