import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

function App(){

    const dataBase = [
        {name: 'Carlos Pena', salary: 800, increase: false},
        {name: 'Logan Mitchell', salary: 3000, increase: false},
        {name: 'Austin Reevs', salary: 5000, increase: false},
    ]

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList dataBase={dataBase}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App