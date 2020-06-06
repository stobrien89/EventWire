class ItineraryEdit extends React.Component{
    state ={
        itinerary:{},
        destinations:[],
        events:[]



    }
    getData = () => { //  ?i=9691783cb89a8114566039f35f76a889
        console.log('search', this.props.location.search);
        console.log('pathname', this.props.location.pathname);
        const id = this.props.location.search.substring(3);
        console.log('/itinerary/' + id);
        fetch('/itinerary/' + id)
            .then((response) => response.json())
            .then((itinerary) => this.setState({ itinerary: itinerary }))
        fetch('/events')
        .then(response => response.json())
        .then(events => this.setState({events:events}))
        fetch('/destinations')
    .then(response => response.json())
    .then (data => this.setState({destinations:data}))
    }
    constructor(props){
        super(props);
        this.getData();
    }

    handleChange = (event) =>{
        this.setState({[event.target.id]: event.target.value})
    }

    handleUpdate = (event) => {
        event.preventDefault();
        const updatedItinerary ={
            name: this.state.itinerary.nameEdit,
            occasion: this.state.itinerary.occasionEdit,
            destination: this.state.itinerary.destinationEdit,
            startDate: this.state.itinerary.startDateEdit,
            endDate: this.state.itinerary.endDateEdit,
            groupSize: this.state.itinerary.groupSizeEdit
        }
        
        fetch(`/itinerary/${this.state.itinerary._id}`, {
            body: JSON.stringify(updatedItinerary),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({
                itinerary:[data, ...this.state.itinerary],
                newItinerary: this.state.itinerary._id,
            next:true
            })
            this.getData()
        })
    }

    handleDelete = (id, index) => {
        fetch(`/itinerary/${id}`, {
            method:'DELETE'
        })
        .then(data => {
            this.setState({
                deleted:true
            })
        })
    }

    render(){
        const groupSizeOptions = [1,2,3,4,5];
        const itinerary = this.state.itinerary;
        return(
            <div className="container-fluid container-height">
                <div className="container">
                    <div className="col-md-12">
                    <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
                    <h1>{this.state.itinerary.name}</h1>
                    <form onSubmit={this.handleUpdate}>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor = "name">Name</label>
                            <input className="form-control" placeholder="Give your itinerary a name" type="text" defaultValue={itinerary.name} onChange={this.handleChange} id="nameEdit" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor = "occasion">Occasion</label>
                            <input className="form-control" placeholder="What's the occasion?" type="text" defaultValue={itinerary.occasion} onChange={this.handleChange} id="occasionEdit" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Destination</label>
                        <select className="form-control" defaultValue={this.state.itinerary.destination} onChange={this.handleChange} id="destinationEdit">
                            {/* <option>{this.state.itinerary.destination}</option> */}
                            {this.state.destinations.length > 0 && this.state.destinations.map((destination, index) =>{
                                        return(
                                            <option value={destination._id}>{destination.name}</option>
                                        )
                                    })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="groupSize">How big is your group?</label>
                        <select className="form-control" defaultValue={this.state.itinerary.groupSize} onChange={this.handleChange} id="groupSizeEdit">
                            {/* <option>{this.state.itinerary.groupSize}</option> */}
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
                            <input className="form-control" placeholder="add your start date" type="text" defaultValue={this.state.itinerary.startDate} onChange={this.handleChange} id="startDateEdit" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="endDate">End Date</label>
                            <input className="form-control" placeholder="add your end date" type="text" defaultValue={this.state.itinerary.endDate} onChange={this.handleChange} id="endDateEdit" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-main">Update your event</button>
                </form>
                    <button className="btn btn-secondary" onClick={()=>this.handleDelete(this.state.itinerary._id)}>Delete</button>
                    </div>
                </div>
                {this.state.deleted && <Redirect to='/' />}
                {this.state.next && <Redirect to={`/itinerary_view?i=${this.state.newItinerary}`} />}
            </div>
        )
    }
}