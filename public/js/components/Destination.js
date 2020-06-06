class Destination extends React.Component {
  state = {
    destination: {},
    next: false
  }

  getData = () => {
    // console.log('search', this.props.location.search);
    // console.log('pathname', this.props.location.pathname);

    // get the path from the browser address bar and only keep the id
    const id = this.props.location.search.substring(3);
    // console.log('/destinations/' + id);

    // use the id to fetch the destination from the DESTINATIONS API
    fetch('/destinations/' + id)
      .then((response) => response.json())
      .then((destination) => {
        this.setState({ destination: destination })

      })
  }

  componentDidMount() {
    this.getData();
  }

  handleClick = () => {
    this.setState({ next: true });
  }

  render() {
    const destination = this.state.destination;

    return (
      <div className="container-fluid container-height">
        <div className="container">
          {/* <div className="d-flex flex-row">
            <h4 className='text-muted'>
              {destination.name}
            </h4>
            <button className="btn-secondary ml-auto">FIND EVENTS</button>
          </div> */}
          <div className="d-flex flex-row flex-wrap flex-fill justify-content-around">

            <div className="flex-column flex-fill flex-shrink-1 mb-4">

              <div className="d-flex flex-row mb-4">
                <h4 className='text-muted'>
                  <Link to={'/destination'}>DESTINATIONS</Link>
                  {' '} >> {destination.name}
                </h4>
              </div>

              <div className="flex-fill mb-3">
                <img className="details_image" src={destination.image_url} alt={destination.name} />
              </div>

              <div className="details_description mb-3">{destination.description}</div>

              <button className="btn-secondary ml-auto" onClick={this.handleClick}>FIND EVENTS</button>

            </div>

            <div className="d-flex flex-column flex-grow-1 ml-auto">
              <h2>EXPEDIA</h2>
            </div>

          </div>

        </div>

        {this.state.next &&
          <Redirect to={`/event?d=${destination._id}`} />
        }
      </div>


    );
  }

}
