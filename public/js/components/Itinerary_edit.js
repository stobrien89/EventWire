class ItineraryEdit extends React.Component{
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
        return(
            <div className="container-fluid container-height">
                <div className="container">
                    <div className="col-md-12">
                    <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
                    <h1>{this.state.itinerary.name}</h1>
                    <button className="btn btn-secondary" onClick={()=>this.handleDelete(this.state.itinerary._id)}>Delete</button>
                    </div>
                </div>
                {this.state.deleted && <Redirect to='/' />}
            </div>
        )
    }
}