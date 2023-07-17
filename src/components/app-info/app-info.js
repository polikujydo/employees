import './app-info.css'

const AppInfo = ({employees, increased}) => {
    return(
        <div className="app-info">
            <h1>Employees data</h1>
            <h2>Employees amount: {employees}</h2>
            <h2>Bonus got: {increased}</h2>
        </div>
    )
}

export default AppInfo