class ItineraryEvents extends React.Component{

    state ={
        itinerary:[]
    }

    getData = () => { //  ?i=9691783cb89a8114566039f35f76a889
        console.log('search', this.props.location.search);
        console.log('pathname', this.props.location.pathname);
        const id = this.props.location.search.substring(3);
        console.log('/itinerary/' + id);
        fetch('/itinerary/' + id)
            .then((response) => response.json())
            .then((itinerary) => this.setState({ itinerary: itinerary }))
    }
    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            <div className="container-fluid container-height">
                <div className="container">
                <div className="row text-center">
                        <div className="col-md-12">
                            <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
                            <h1>Itinerary Events</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


