import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({dataBase}) => {

    const elements = dataBase.map(eachEmployee => {
        return (
            <EmployeesListItem name={eachEmployee.name} salary={eachEmployee.salary} increase={eachEmployee.increase} rise={eachEmployee.rise}/>
        )
    })

    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList