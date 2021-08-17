import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider"
import { useHistory } from 'react-router-dom';
import "./Employee.css"


export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  //  Define the intial state of the form inputs with useState()

  const [employee, setEmployee] = useState({
    name:"",
    location: 0
  });

  const history = useHistory();

  useEffect(() => {
    getLocations()
  }, [])

  // When a field changes, update state. The return will re-render and display based on the values in state
  // Controlled component

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state. */
    const newEmployee = { ...employee }
    /* Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value
    // update state
    setEmployee(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else { 
      // Invoke addEmployee passing the new employee object as an argument
      // Once complete, change the url and display the employee list
      const newEmployee = {
        name: employee.name,
        locationId: locationId
      }
      addEmployee(newEmployee)
        .then(() => history.push("/employees"))
    }
  } // end handleClickSaveEmployee

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee Name" value={employee.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Assign to location: </label>
          <select name="locationId" id="locationId" className="form=control" value={employee.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>Hire Employee</button>
    </form>
  )
}