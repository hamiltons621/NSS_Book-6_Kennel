import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
  const { locations } = useContext(LocationContext)
  const [location, setLocation] = useState({employees: [], animals: []})
  /*
      Given the example URL above, this will store the value
      of 5 in the animalId variable
  */
  const { locationId } = useParams();

  useEffect(() => {
    const thisLocation = locations.find(l => l.id === parseInt(locationId)) || { employees: [], animals: []}

    setLocation(thisLocation)
  }, [locationId])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <div className="location__employees">Employees: {location.employees.map(employee => employee.name).join(", ")}</div>
      <div className="location__animals">Animals: {location.animals.map(animal => animal.name).join(", ")}</div>
    </section>
  )
}


 