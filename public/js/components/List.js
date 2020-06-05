class ListItem extends React.Component {

  FirstSentence = (str) => {
    const regex = /^(.*?(?<!\b\w)[.?!])\s+[A-Z0-9]/;
    let sentence = regex.exec(str);

    if (sentence !== null) {
      // keep it to 80 char
      return sentence[1].substring(0, 80);
    }
  }

  handleClick = (listName, url) => {
    if (listName === 'destinations') {

      window.history.pushState('', 'Event Wire - Events', url);
      // window.history.go(url);                // if we use this url must be `/event?d=${item._id}`

      this.props.updateBaseURL('events', url)   // if we use this url must be `/events?d=${item._id}`
    }
  }

  render() {
    const { item, listName } = this.props;
    let buttonHTML, short_description, cardTextClass;

    if (listName === 'destinations') {
      short_description = item.description;
      buttonHTML = 'Find Events';
      cardTextClass = 'card-text-height-destination';
    } else {
      short_description = this.FirstSentence(item.description);
      buttonHTML = 'Login to Add';
      cardTextClass = 'card-text-height-event';
    }

    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm card-height">
          <div className="card-img-top">
            {item.image_url ? <img draggable="false" className="card-img-top card-img-height" src={item.image_url} alt={item.name} /> : ''}
          </div>
          <div className="card-body d-flex flex-column">
            <h5 class="card-title">{item.name}</h5>
            <p className={`card-text card-text-overflow ${cardTextClass}`}>{short_description}</p>

            {listName === 'destinations' &&
              <button
                type="button"
                class="mt-auto btn btn-md btn-outline-secondary"
                onClick={() => { this.handleClick(listName, `/events?d=${item._id}`) }}
              >
                {buttonHTML}
              </button>
              // <Link to={`/events?d=${item._id}`} class="mt-auto btn btn-md btn-outline-secondary">
              //   {buttonHTML}
              // </Link>
            }

            {listName === 'events' &&
              <Link to='/login' class="mt-auto btn btn-md btn-outline-secondary">
                {buttonHTML}
              </Link>
            }

            {/* 
            {listName === 'events' &&
              <Link to='/login' class="mt-auto btn btn-md btn-outline-secondary">
                {buttonHTML}
              </Link>
            } */}
          </div>
        </div>
      </div>
    );
  }
}


class List extends React.Component {
  state = {
    listItems: [],
    listName: this.props.location.pathname.substring(1) + 's',
    baseURL: '/' + this.props.location.pathname.substring(1) + 's',
  };

  componentDidMount() {
    this.getData(this.state.baseURL);
  }

  updateBaseURL = async (base, url) => {
    // console.log(base);
    this.setState({ listItems: [], listName: base, baseURL: url }, () => {

      // console.log(this.state.baseURL);
      this.getData(this.state.baseURL);

      // window.history.pushState('', 'Event Wire - Events', '/event');
    });
  }

  getData = (url) => {
    // console.log('url', url);
    const query = this.props.location.search !== '/events' && this.props.location.search !== '/destinations'
      ? this.props.location.search
      : '';
    // console.log('query', query);
    const searchURL = url + query;
    // console.log('searchURL', searchURL);
    fetch(searchURL)
      .then((response) => response.json())
      .then((listItems) => this.setState({ listItems: listItems }))
      .catch((error) => console.log(error));
  }

  render() {
    const listName = this.state.listName;
    const page_title = listName.toUpperCase();

    return (
      <div className="container-fluid container-height">
        <div className="container">
          <div>
            <h3 className="page_title">{page_title}</h3>
          </div>
          <div className="row">
            {this.state.listItems.length > 0 &&
              this.state.listItems.map((item, index) => {
                return <ListItem item={item} key={index} listName={listName} getData={this.getData} updateBaseURL={this.updateBaseURL} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}