import { Component } from 'react'

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props){
        super(props)
            this.state = {
                input: ''
            }
    }

    onUpdateSearch = (event) => {
        const input = event.target.value
        this.setState({input})
        this.props.onUpdateSearch(input) //lifting state to App
    }
   render(){
    return(
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Find an employee"
             value={this.state.input}
             onChange={this.onUpdateSearch}/>
    )
   }
}

export default SearchPanel