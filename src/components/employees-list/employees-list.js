import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({dataBase, onDelete}) => {

    const elements = dataBase.map(eachEmployee => {
        return (
            <EmployeesListItem key={eachEmployee.id}
                               name={eachEmployee.name}
                               salary={eachEmployee.salary}
                               increase={eachEmployee.increase}
                               rise={eachEmployee.rise}
                               onDelete={() => onDelete(eachEmployee.id)}/>
        )
    })

    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList