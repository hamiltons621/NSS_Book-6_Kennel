import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"

export const ApplicationViews = () => {
  return (
    <>
      <h2>Nashville Kennels</h2>
      <small>Loving care when you're not there.</small>

      <address>
        <div>Visit Us at the Nashville North Location</div>
        <div>500 Puppy Way</div>
      </address>

      <LocationProvider>
        <AnimalProvider>
          <EmployeeProvider>
            <CustomerProvider>
              <Route exact path="/locations">
                <LocationList />
              </Route>

              <Route exact path="/locations/create">
                <LocationForm />
              </Route>

              <Route exact path="/locations/detail/:locationId(\d+)">
                <LocationDetail />
              </Route>

              <Route exact path="/animals">
                <AnimalList />
              </Route>

              <Route path="/animals/create">
                <AnimalForm />
              </Route>

              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>

              <Route path="/customers">
                <CustomerList />
              </Route>

              <Route exact path="/employees">
                <EmployeeList />
              </Route>

              <Route path="/employees/create">
                <EmployeeForm />
              </Route>

              <Route exact path="/employees/detail/:employeeId(\d+)">
                <EmployeeDetail />
              </Route>

            </CustomerProvider>
          </EmployeeProvider>
        </AnimalProvider>
      </LocationProvider>
    </>
  )
}
