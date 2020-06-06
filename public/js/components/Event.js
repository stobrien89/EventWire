class Event extends React.Component {
  state = {
    event: {}
  }

  getData = () => {
    // console.log('search', this.props.location.search);
    // console.log('pathname', this.props.location.pathname);

    // get the path from the browser address bar and only keep the id
    const id = this.props.location.search.substring(3);
    // console.log('/events/' + id);

    // use the id to fetch the event from the EVENTS API
    fetch('/events/' + id)
      .then((response) => response.json())
      .then((event) => {
        this.setState({ event: event, address: event.address, contact: event.contact })

      })
  }

  componentDidMount() {
    this.getData();
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
                  <div className="details_text text-muted"><a href={`${event.google_map}`} target="_blank">MAP</a></div>
                </div>
              }

              <div className="p-2 details_description">{event.description}</div>

              <div className="d-flex flex-row event_header">
                <div className="p-2 "><span className="details_label">PRICE PER PERSON</span> ${event.price_per_person}</div>
                <button className="btn-secondary ml-auto">ADD TO ITINERARY</button>
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
                      {event.contact.phone}
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