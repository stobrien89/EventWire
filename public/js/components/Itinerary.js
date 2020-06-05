
class Itinerary extends React.Component {
state = {
    itinerary:[]
}

getData = () => {
    fetch('/itinerary')
    .then(response => response.json())
    .then (data => this.setState({itinerary:data}))
}

componentDidMount(){
    this.getData();
}

handleChange = (event) =>{
    this.setState({[event.target.id]: event.target.value})
}

handleSubmit = (event) => {
    event.preventDefault();
    fetch('/itinerary', {
        body: JSON.stringify({
            name: this.state.name,
            occasion: this.state.occasion
        }),
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(newItinerary => {
        this.setState({
            itinerary:[...this.state.itinerary, newItinerary],
            name:'',
            occasion:''
        })
    })
}

    render(){
        return(
            <div className="container-fluid">
                <div className="container">
                    <h1>Itinerary</h1>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor = "name">Name</label>
                            <input className="form-control" placeholder="link name" type="text" value={this.state.name} onChange={this.handleChange} id="name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor = "occasion">Occasion</label>
                            <input className="form-control" placeholder="http://" type="text" value={this.state.occasion} onChange={this.handleChange} id="occasion" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Save your Itinerary</button>
                </form>
                    <table class="table">
                        <tbody>
                            {this.state.itinerary.length > 0 && this.state.itinerary.map((itinerary, index) =>{
                                return(
                                    <tr>
                                        <th scope="row">{itinerary.name}</th>
                                        <td>{itinerary.occasion}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}