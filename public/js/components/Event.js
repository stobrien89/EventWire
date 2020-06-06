class Event extends React.Component {
  state = {
    event: {},
    isLoggedIn: false,
    itineraryId: '',
    events_onClick: false,
    nextURL: '',
    itinerary: []
  }

  isLoggedIn = () => {
    // console.log(localStorage.token);
    // if (localStorage.getItem('token')) {
    //   this.setState({ isLoggedIn: true })
    //   return true;
    // }
    return this.state.isLoggedIn;
  }

  parseEventID = (searchURL) => {
    const indexE = searchURL.indexOf("?e=");
    const indexI = searchURL.indexOf("&i=");
    // console.log(indexI);
    if (indexE > -1) {
      const eventId = indexI > -1 ? searchURL.substring(indexE + 3, indexI) : searchURL.substring(indexE + 3);
      // console.log(eventId);
      return eventId;
    }
    return '';
  }

  parseItineraryID = (searchURL) => {
    const index = searchURL.indexOf("&i=");
    if (index > -1) {
      const itineraryId = searchURL.substring(index + 3);
      // console.log(itineraryId);
      return itineraryId;
    }
    return '';
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
            // this.setState({
            //   itinerary: itinerary
            // })
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

  getItineraryData = () => {
    // get the path from the browser address bar and only keep the id
    const itineraryId = this.parseItineraryID(this.props.location.search);
    // console.log('/events/' + id);
    if (itineraryId !== '') {
      console.log('itinerary found');
      fetch('/itinerary/' + itineraryId)
        .then((response) => response.json())
        .then(async (itinerary) => {
          this.setState({ itineraryId: itineraryId, itinerary: itinerary })
        })
    }
  }

  getData = () => {
    // console.log('search', this.props.location.search);
    // console.log('pathname', this.props.location.pathname);
    // console.log('parse', this.parseItineraryID(this.props.location.search));
    // console.log('parseEventID', this.parseEventID(this.props.location.search));

    const loggedIn = localStorage.getItem('token') ? true : false;

    // get the path from the browser address bar and only keep the id
    const id = this.parseEventID(this.props.location.search);

    //this.props.location.search.substring(3);
    // use the id to fetch the event from the EVENTS API
    fetch('/events/' + id)
      .then((response) => response.json())
      .then(async (event) => {
        this.setState({ event: event, address: event.address, contact: event.contact, isLoggedIn: loggedIn })
      })
  }

  componentDidMount() {
    // this.isLoggedIn();
    this.getData();
    this.getItineraryData();
  }

  render() {
    const event = this.state.event;

    return (

      <div className="container-fluid container-height">
        <div className="container">
          <div className="d-flex flex-row flex-wrap flex-fill justify-content-around">
            <div className="flex-column flex-fill flex-shrink-1 mb-4">
              <div className="p-2">
                <h4 className='text-muted'>
                  <Link to={`/destination_details?d=${event.destination}`}>{event.destination_name}</Link>
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

            <div className="d-flex flex-column flex-grow-1 ml-auto">
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
      </div>
    )
  }
}