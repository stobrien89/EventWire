class Destination extends React.Component {
  state = {
    destination: {},
    itineraryId: '',
    next: false
  }

  getData = () => {
    // console.log('search', this.props.location.search);
    // console.log('pathname', this.props.location.pathname);

    // get the path from the browser address bar and only keep the id
    const destinationId = parseDestinationID(this.props.location.search);
    const itineraryId = parseItineraryID(this.props.location.search);

    // use the id to fetch the destination from the DESTINATIONS API
    fetch('/destinations/' + destinationId)
      .then((response) => response.json())
      .then((destination) => {
        this.setState({ destination: destination, itineraryId: itineraryId })

      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getData();
  }

  handleClick = () => {
    this.setState({ next: true });
  }

  render() {
    const destination = this.state.destination;
    let eventLink;

    // create event link 
    if (this.state.itineraryId !== '') {
      // if itinerary is avail
      eventLink = `/event?d=${destination._id}&i=${this.state.itineraryId}`;
    } else {
      // if no itinerary is avail
      eventLink = `/event?d=${destination._id}`;
    }


    return (
      <div className="container-fluid container-height">
        <div className="container">
          {/* <div className="d-flex flex-row flex-wrap flex-fill justify-content-around"> */}
          <div className="row">

            <div className="col-12 col-md-8 mb-4 mt-4">

              <div className="d-flex flex-row mb-4">
                <h4 className='text-muted'>
                  <Link to={'/destination'}>DESTINATIONS</Link>
                  {' '} >> {destination.name}
                </h4>
              </div>

              <div className="col-12 col-md-9 mb-3">
                <img className="details_image" src={destination.image_url} alt={destination.name} />

              </div>

              <div className="col-12 col-md-9 col-sm-9 details_description mb-3">{destination.description}</div>

              <button className="col-12 col-md-9 col-sm-9 ml-1 btn-secondary" onClick={this.handleClick}>FIND EVENTS</button>

            </div>

            <div className="col-12 col-md-4 mt-4">
              {/* <h2>EXPEDIA</h2> */}
              <div id="searchWidget" className="expedia mx-auto"><iframe id="widgetIframe" src={`https://www.expedia.com/marketing/widgets/searchform/widget?wtt=1&tp1=7907203&tp2=10479934&lob=H,FH,F,CA&des=${destination.name}&wbi=6&olc=421B43&whf=7&hfc=F2AE1D&wif=4&ifc=&wbc=DC4626&wbf=4&bfc=FFFFFF&wws=2&sfs=H600FW300F&langid=1033`} width="100%" height="100%" scrolling="no" frameBorder="0"></iframe></div>
            </div>

          </div>

        </div>

        {this.state.next &&
          <Redirect to={eventLink} />
        }

      </div>

    );
  }

}
