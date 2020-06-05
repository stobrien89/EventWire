
class Itinerary extends React.Component {
state = {
    itinerary:[],
    startDate: new Date()
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
            occasion: this.state.occasion,
            destination: this.state.destination,
            startDate: this.state.startDate,
            endDate: this.state.endDate
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
            endDate:''
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
            <div className="container-fluid">
                <div className="container">
                    <h1>Itinerary</h1>
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
                            <option>Austin, TX</option>
                            <option>Nashville, TN</option>
                            <option>San Diego, CA</option>
                            <option>Las Vegas, NV</option>
                            <option>New York City, NY</option>
                            <option>Miami, FL</option>
                            <option>Atlanta, GA</option>
                            <option>Chicago, IL</option>
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
                    {/* <DatePicker selected={this.state.startDate} onChange={this.handleChange} /> */}
                    <button type="submit" class="btn btn-primary">Save your Itinerary</button>
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
            </div>
        )
    }
}