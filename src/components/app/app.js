import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component{  
    constructor(props){
        super(props)
        this.state = {
             dataBase: [
                {name: 'Carlos Pena', salary: 800, increase: false, id: 1},
                {name: 'Logan Mitchell', salary: 3000, increase: false, id: 2},
                {name: 'Austin Reevs', salary: 5000, increase: false, id: 3},
            ]
        }
        this.maxId = 4
    }
    
    deleteItem = (id) => {
        this.setState(({dataBase}) => {
            const index = dataBase.findIndex(eachEmployee => eachEmployee.id === id)//receiving element id that fits
        
            const before = dataBase.slice(0, index)
            const after = dataBase.slice(index + 1)

            const newArray = [...before, ...after]

            return{
                dataBase: newArray
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({dataBase}) => {
            const newArr = [...dataBase, newItem];
            return {
                dataBase: newArr
            }
        });
    }
    render(){
        return(
            <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList 
            dataBase={this.state.dataBase}
            onDelete={this.deleteItem}/>
            <EmployeesAddForm 
            onAdd={this.addItem}/>

        </div>
        )
    }
   
}

export default App