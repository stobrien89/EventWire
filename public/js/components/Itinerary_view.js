class ItineraryView extends React.Component{
    state ={
        itinerary:[],
        destination:[],
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
    }

    constructor(props){
        super(props);
        this.getData();
    }
    render(){
        return(
            <div className="container-fluid container-height">
                <div className="container">
                <div className="row text-center">
                        <div className="col-md-12">
                            <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
                            <h1>{this.state.itinerary.name}</h1>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Occasion</th>
                                        <td>{this.state.itinerary.occasion}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Group Size</th>
                                        <td>{this.state.itinerary.groupSize}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Start Date</th>
                                        <td>{this.state.itinerary.startDate}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">End Date</th>
                                        <td>{this.state.itinerary.endDate}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Link</th>
                                        <td>{`http://localhost:3000/itinerary_events?i=${this.state.itinerary._id}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to={`/event?d=${this.state.itinerary.destination}`} className="btn">Find Event</Link>
                            <h3>Events</h3>
                            <div className="row">
                                {this.state.events.length > 0 && this.state.events.map((event, index)=>{
                                    for (let i=0; i<this.state.itinerary.events.length; i++){
                                        if(event._id === this.state.itinerary.events[i]){
                                            return(
                                                    <div className="col-md-4">
                                                        <p>{event.name}</p>
                                                        <p>{event.address.city}</p>
                                                        {/* <button className="btn btn-primary" onClick={()=>{this.addEvent(event._id, index, this.state.itinerary)}}>Add to my Itinerary</button> */}
                                                    </div>
                                            )
                                        }
                                    }
                                })}
                       </div>
                            </div>
            </div>
            </div>
            </div>
        )
    }
}