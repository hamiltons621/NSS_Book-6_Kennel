import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory, Link } from 'react-router-dom'
import "./Animal.css"

export const AnimalList = () => {

  const history = useHistory()
  
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext) /* send imported AnimalContext as argument through react-imported useContext() hook. This allows us access to the object returned in AnimalProvider. That object is being deconstructed here. */

  /* 
  useEffect is new way to listen for custom events. "reaches out to the world for something" 
  */
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals() /* invokes getAnimals function to go into API and pull Application State and change the value of animals */
  }, [])
  /* 
  useEffect takes 2 arguments: 
  1) Callback function that already contains logic to run
  2) *array of observable items* array of things we're observing that establishes when function should run (if value of anything changes in array) When array is empty, callback function will only run when initially invoked, never again
  */

  return (
    <>
      <h2>Animals</h2>
      <button onClick={
        () => history.push("/animals/create")
      }>
        Add Animal
      </button>
      <div className="animals">
        {
          animals.map(animal => {
            return (
              <div className="animal">
              <Link to={`/animals/detail/${animal.id}`} key={animal.id}>
                {animal.name}
              </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

