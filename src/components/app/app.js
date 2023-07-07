import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBase: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            input: '',
            filter: 'Rise'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({dataBase}) => {
            return {
                dataBase: dataBase.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({dataBase}) => {
            const newArr = [...dataBase, newItem];
            return {
                dataBase: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({dataBase}) => ({
            dataBase: dataBase.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    serachEmployee = (input, array) => {
        if(input === 0){
            return array
        }

        return array.filter(item => {
            return item.name.indexOf(input) > -1 // returning index of string that we've found
        })
    }
    
    onUpdateSearch = (input) => {
        this.setState({input: input}) //setting this.state.input from serachPanel to App input to filtet data
    }

    filterPost = (filter, array) => {
        switch(filter){
            case 'Rise':
                return array.filter(item => item.rise)
            case 'High':
                return array.filter(item => item.salary > 1000)
            default:
                return array 
        }   
        
    }

    onFilterSelect = (filter) => {
        this.setState({filter: filter})
    }

    render() {
        const {dataBase, input, filter} = this.state
        const employees = this.state.dataBase.length;
        const increased = this.state.dataBase.filter(item => item.increase).length;
        const visibleData = this.filterPost(filter, this.serachEmployee(input, dataBase))
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                
                <EmployeesList 
                    dataBase={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;