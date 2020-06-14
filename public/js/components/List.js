class ListItem extends React.Component {
  state = {
    destinations_onClick: false,
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
        this.state.itinerary.events.push(this.props.item._id);

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

  handleClick = (listName, url) => {
    if (listName === 'destinations') {
      this.setState({ destinations_onClick: true, nextURL: url });
    } else {
      // EVENT BUTTON WAS CLICKED
      this.setState({ events_onClick: true });

      // GET ITINERARY OBJECT AND SET IT INTO STATE
      this.updateItinerary(this.props.itineraryId, url);
    }
  }

  render() {
    const { item, listName } = this.props;
    let buttonHTML, short_description, cardTextClass, detailsPage;

    if (listName === 'destinations') {
      short_description = item.description;
      detailsPage = '/destination_details?d';
      buttonHTML = 'Find Events';
      cardTextClass = 'card-text-height-destination';
    } else { // events
      short_description = item.description; //this.FirstSentence(item.description);
      detailsPage = '/event_details?e';
      buttonHTML = this.props.isLoggedIn ? 'Add to Itinerary' : 'Login to Add';
      cardTextClass = 'card-text-height-event';
    }

    const query = this.props.itineraryId === '' ? '' : '&i=' + this.props.itineraryId;

    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm card-height">
          <div className="card-img-top">
            {item.image_url ? <img draggable="false" className="card-img-top card-img-height" src={item.image_url} alt={item.name} /> : ''}
          </div>
          <div className="card-body d-flex flex-column">
            <h5 class="card-title"><Link to={`${detailsPage}=${item._id}${query}`}>{item.name}</Link></h5>
            <p className={`card-text card-text-overflow ${cardTextClass}`}>{short_description}</p>

            {/* IF USER IS VIEWING A DESTINATION THEY CAN SEARCH FOR EVENTS */}
            {listName === 'destinations' &&
              <button
                type="button"
                class="mt-auto btn btn-md btn-outline-secondary"
                onClick={() => { this.handleClick(listName, `/event?d=${item._id}`) }}
              >
                {buttonHTML}
              </button>
            }

            {/* WHILE VIEWING AN EVENT AND USER NOT LOGGED IN, SEND USER TO LOGIN PAGE */}
            {listName === 'events' && !this.props.isLoggedIn &&
              <Link to='/login' class="mt-auto btn btn-md btn-outline-secondary">
                {buttonHTML}
              </Link>
            }

            {/* WHILE VIEWING AN EVENT AND USER LOGGED IN WITH AN ITINERARY THEY CAN ADD THE EVENT TO ITINERARY */}
            {listName === 'events' && this.props.isLoggedIn && this.props.itineraryId !== '' &&
              <button
                type="button"
                class="mt-auto btn btn-md btn-outline-secondary"
                onClick={() => { this.handleClick(listName, `/itinerary_view?i=${this.props.itineraryId}`) }}
              >
                {buttonHTML}
              </button>
            }

            {/* WHILE VIEWING AN EVENT AND USER LOGGED IN WITHOUT AN ITINERARY SEND THEM TO CREATE AN ITINERARY */}
            {listName === 'events' && this.props.isLoggedIn && this.props.itineraryId === '' &&
              <Redirect to='/itinerary' />
            }
          </div>
        </div>

        {this.state.destinations_onClick && this.state.nextURL !== '' &&
          <Redirect to={this.state.nextURL} />
        }

        {this.state.events_onClick && this.state.nextURL !== '' &&
          <Redirect to={this.state.nextURL} />
        }
      </div >
    );
  }
}


class List extends React.Component {
  state = {
    listItems: [],
    listName: this.props.location.pathname.substring(1) + 's',
    baseURL: '/' + this.props.location.pathname.substring(1) + 's',
    isLoggedIn: false,
    itineraryId: ''
  };

  componentDidMount() {
    this.getData(this.state.baseURL);
  }

  getData = (url) => {

    // const loggedIn = localStorage.getItem('token') ? true : false;
    const loggedIn = isUserLoggedIn();

    const query = this.props.location.search !== '/events' && this.props.location.search !== '/destinations'
      ? this.props.location.search
      : '';

    const searchURL = url + query;

    fetch(searchURL)
      .then((response) => response.json())
      .then((listItems) => this.setState({
        listItems: listItems, itineraryId: parseItineraryID(searchURL), isLoggedIn: loggedIn
      }))
      .catch((error) => console.log(error));
  }

  render() {

    const listName = this.state.listName;
    const page_title = listName.toUpperCase();

    return (
      <div className="container-fluid container-height">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <img className="img-fluid" id="heading-pin" src="/img/ew_pin.png"></img>
              <h1>{page_title}</h1>
            </div>
          </div>
          {/* <div>
            <h1 className="page_title">{page_title}</h1>
          </div> */}
          <div className="row">
            {this.state.listItems.length > 0 &&
              this.state.listItems.map((item, index) => {
                return <ListItem item={item} key={index} listName={listName} getData={this.getData}
                  isLoggedIn={this.state.isLoggedIn} itineraryId={this.state.itineraryId} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}