import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory, Link } from 'react-router-dom'
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const history = useHistory()

  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])

  return (
    <>
      <h2>Employees</h2>
      <button onClick={
        () => history.push("/employees/create")
      }>
        Add Employee
      </button>
      <section className="employees">
        {
          employees.map(employee => {
            return (
              <div className="employee">
                <Link to={`/employees/detail/${employee.id}`} key={employee.id}>
                  {employee.name}
                </Link>
              </div>
            )
          })
        }
      </section>
    </>
  )
}