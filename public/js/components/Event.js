class Event extends React.Component {
  state = {
    event: {},
    isLoggedIn: false,
    itineraryId: '',
    events_onClick: false,
    nextURL: '',
    itinerary: []
  }

  updateItinerary = (id, url) => {
    fetch('/itinerary/' + id)
      .then((response) => response.json())
      .then((itinerary) => {
        this.setState({ itinerary: itinerary })
        // ADD EVENT TO ITINERARY OBJECT IN STATE
        this.state.itinerary.events.push(this.state.event._id);

        fetch(`/itinerary/${id}`, {
          body: JSON.stringify(this.state.itinerary),
          method: 'PUT',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(itinerary => {
            this.setState({ nextURL: url });
          })
      })
  }

  handleClick = (url) => {
    // EVENT BUTTON WAS CLICKED
    this.setState({ events_onClick: true });

    // GET ITINERARY OBJECT AND SET IT INTO STATE
    this.updateItinerary(this.state.itineraryId, url);
  }

  getData = () => {

    let foundEvent;
    let foundItinerary;
    const loggedIn = isUserLoggedIn();

    // get the path from the browser address bar and only keep the id
    const eventId = parseEventID(this.props.location.search);
    const itineraryId = parseItineraryID(this.props.location.search);

    // use the id to fetch the event from the EVENTS API
    fetch('/events/' + eventId)
      .then((response) => response.json())
      .then((event) => {
        foundEvent = event;
        if (itineraryId !== '') {
          console.log('itinerary found');
          return fetch('/itinerary/' + itineraryId);
        }
        // this.setState({ event: event, address: event.address, contact: event.contact, isLoggedIn: loggedIn })
      })
      .then((response) => {
        if (response !== undefined) {
          response.json()
        }
      })
      .then((itinerary) => {
        foundItinerary = itinerary !== undefined ? itinerary : [];
        // console.log(foundItinerary);
        this.setState({
          isLoggedIn: loggedIn,
          event: foundEvent, address: foundEvent.address, contact: foundEvent.contact,
          itineraryId: itineraryId, itinerary: foundItinerary
        })
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const event = this.state.event;
    let destinationLink;

    // create destination link 
    if (this.state.itineraryId !== '') {
      // if itinerary is avail
      destinationLink = `/destination_details?d=${event.destination}&i=${this.state.itineraryId}`;
    } else {
      // if no itinerary is avail
      destinationLink = `/destination_details?d=${event.destination}`;
    }

    return (

      <div className="container-fluid container-height" >
        <div className="container">
          <div className="d-flex flex-row flex-wrap flex-fill justify-content-around mt-3">
            <div className="flex-column flex-fill flex-shrink-1 mb-4">
              <div className="p-2">
                <h4 className='text-muted'>
                  <Link to={destinationLink}>{event.destination_name}</Link>
                  {' '} >> {event.name}</h4>
                <div className="mb-3 details_text">RATING: *****</div>
                <div className="details_text details_label">WHEN:</div>
                <div className="details_text">{event.start_date} - {event.end_date}</div>
              </div>

              {this.state.address &&
                <div className="p-2">
                  <div className="details_text details_label">LOCATION:</div>
                  <div className="details_text">{`${event.address.street}`}</div>
                  <div className="details_text">
                    {`${event.address.city}, ${event.address.state} ${event.address.zip} ${event.address.country}`}
                  </div>
                  <div className="details_text text-muted detail_map"><a href={`${event.google_map}`} target="_blank">MAP</a></div>
                </div>
              }

              <div className="p-2 details_description">{event.description}</div>

              <div className="d-flex flex-row event_header">
                <div className="p-2 "><span className="details_label">PRICE PER PERSON</span> ${event.price_per_person}</div>
                {/* <button className="btn-secondary ml-auto">ADD TO ITINERARY</button> */}

                {/* WHILE VIEWING AN EVENT AND USER NOT LOGGED IN, SEND USER TO LOGIN PAGE */}
                {!this.state.isLoggedIn &&
                  <Link to='/login' class="ml-auto btn btn-md btn-outline-primary">
                    Login to Add
                  </Link>
                }


                {/* WHILE VIEWING AN EVENT AND USER LOGGED IN WITH AN ITINERARY THEY CAN ADD THE EVENT TO ITINERARY */}
                {this.state.isLoggedIn && this.state.itineraryId !== '' &&
                  <button
                    type="button"
                    class="ml-auto btn btn-md btn-outline-primary"
                    onClick={() => { this.handleClick(`/itinerary_view?i=${this.state.itineraryId}`) }}
                  >
                    Add to Itinerary
                  </button>
                }

                {/* WHILE VIEWING AN EVENT AND USER LOGGED IN WITHOUT AN ITINERARY SEND THEM TO CREATE AN ITINERARY */}
                {this.state.isLoggedIn && this.state.itineraryId === '' &&
                  <Redirect to='/itinerary' />
                }

              </div>
            </div>

            <div className="d-flex flex-column flex-grow-1 ml-auto mt-2">
              <div className="flex-fill"><img className="details_image" src={event.image_url} alt={event.name} /></div>

              {this.state.contact &&
                <div className="p-3 flex-fill justify-content-around">
                  <div className="mb-1 details_text details_label">CONTACT INFO:</div>

                  {event.contact.name &&
                    <div className="details_text">
                      <i class='far fa-address-card fa-font-size'></i>{' '}
                      {event.contact.name}
                    </div>
                  }

                  {event.contact.phone &&
                    <div className="details_text">
                      <i class="fa fa-phone-square fa-font-size"></i>{' '}
                      {/* {event.contact.phone} */}
                      <a href={`tel:${event.contact.phone}`}>{event.contact.phone}</a>
                    </div>
                  }

                  {event.contact.email &&
                    <div className="details_text">
                      <i class="fas fa-at fa-font-size"></i>{' '}
                      {event.contact.email}</div>
                  }

                </div>
              }
            </div>
          </div>
        </div>

        {this.state.events_onClick && this.state.nextURL !== '' &&
          <Redirect to={this.state.nextURL} />
        }
      </div >
    )
  }
}