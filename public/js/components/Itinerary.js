
class Itinerary extends React.Component {
state = {
    itinerary:[],
    destinations:[]
    // startDate: new Date()
}



getData = () => {
    fetch('/itinerary')
    .then(response => response.json())
    .then (data => this.setState({itinerary:data}))
    fetch('/destinations')
    .then(response => response.json())
    .then (data => this.setState({destinations:data}))

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
            occasion: this.state.occasion,
            destination: this.state.destination,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            groupSize: this.state.groupSize
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
            occasion:'',
            destination:'',
            startDate:'',
            endDate:'',
            newItinerary: newItinerary._id,
            next:true

        })


    })
}

handleDelete = (id, index) => {
    fetch(`/itinerary/${id}`, {
        method:'DELETE'
    })
    .then(data => {
        this.setState({
            itinerary:[
                ...this.state.itinerary.slice(0, index),
                ...this.state.itinerary.slice(index+1)
            ]
        })
    })
}

    render(){
        const groupSizeOptions = [1,2,3,4,5];
        return(
            <div className="container-fluid container-height">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
                            <h1>Create Your Itinerary</h1>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor = "name">Name</label>
                            <input className="form-control" placeholder="Give your itinerary a name" type="text" value={this.state.name} onChange={this.handleChange} id="name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor = "occasion">Occasion</label>
                            <input className="form-control" placeholder="What's the occasion?" type="text" value={this.state.occasion} onChange={this.handleChange} id="occasion" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Destination</label>
                        <select className="form-control" value={this.state.destination} onChange={this.handleChange} id="destination">
                            <option>Select a destination</option>
                            {this.state.destinations.length > 0 && this.state.destinations.map((destination, index) =>{
                                        return(
                                            <option>{destination.name}</option>
                                        )
                                    })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="groupSize">How big is your group?</label>
                        <select className="form-control" value={this.state.groupSize} onChange={this.handleChange} id="groupSize">
                            <option>Select a groupSize</option>
                            {groupSizeOptions.map((size)=>{
                                return(
                                    <option>{size}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="startDate">Start Date</label>
                            <input className="form-control" placeholder="add your start date" type="text" value={this.state.startDate} onChange={this.handleChange} id="startDate" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="endDate">End Date</label>
                            <input className="form-control" placeholder="add your end date" type="text" value={this.state.endDate} onChange={this.handleChange} id="endDate" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-main">Next - Pick your Events</button>
                </form>
                    <table class="table">
                        <tbody>
                            {this.state.itinerary.length > 0 && this.state.itinerary.map((itinerary, index) =>{
                                return(
                                    <tr>
                                        <th scope="row">{itinerary.name}</th>
                                        <td>{itinerary.occasion}</td>
                                        <td>{itinerary.destination}</td>
                                        <td><button onClick={()=>this.handleDelete(itinerary._id, index)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {this.state.next && <Redirect to={`/itinerary_events?i=${this.state.newItinerary}`} />}
            </div>

        )
    }
}