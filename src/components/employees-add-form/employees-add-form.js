import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component{
   constructor(props){
    super(props)
    this.state = {
        name: '',
        salary: '',
    }
    this.classNames = "form-control new-post-label "
}

onValueChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
onSubmit = (event) => {
    event.preventDefault();
    if(this.state.name.length < 3 || !this.state.salary){
        return
    }
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
        name: '',
        salary: ''
    })
}

   render(){
        return(
            <div className="app-add-form">
            <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className= {this.classNames}
                        placeholder="Name"
                        name="name"
                        value={this.state.name} //Because of value={state}, state now controlling input value
                        onChange={this.onValueChange} />
                    <input type="number"
                        className= {this.classNames}
                        placeholder="Wage"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
   }
}

export default EmployeesAddForm;