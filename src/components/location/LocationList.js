import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory, Link } from "react-router-dom"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])


  return (

    <>
      <h2>Locations</h2>
      <button onClick={
        () => history.push("/locations/create")
      }>
        Add Location
      </button>
      <section className="locations">
        {
          locations.map(location => {
            return (
              <div className="location" key={location.id}>
                <Link to={`/locations/detail/${location.id}`}>
                  {location.name}
                </Link>
                <div>Employee Count: {location.animals.length}</div>
                <div>Animal Count: {location.employees.length}</div>
              </div>
            )
          })
        }
      </section>
    </>
  )
}
