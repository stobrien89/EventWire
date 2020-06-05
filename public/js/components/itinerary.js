
class Itinerary extends React.Component {
state = {
    itinerary:[]
}

getData = () => {
    fetch('/itinerary')
    .then(response => response.json())
    .then (data => this.setState({itinerary:data}))
}

componentDidMount(){
    this.getData();
}

handleChange = (event) =>{
    this.setState({[event.target.id]: event.target.value})
}

    render(){
        return(
            <div>

            </div>
        )
    }
}