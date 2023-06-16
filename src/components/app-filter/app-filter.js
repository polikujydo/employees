import "./app-filter.css"

const AppFilter = () => {
    return(
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All Employees
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Rise Employees
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                     High Wage 
            </button>
        </div>
    )
}

export default AppFilter