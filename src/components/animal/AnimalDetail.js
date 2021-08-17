import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const { animals } = useContext(AnimalContext)
  const { releaseAnimal } = useContext(AnimalContext)
  const [animal, setAnimal] = useState({ location: {}, customer: {} })
  /*
      Given the example URL above, this will store the value
      of 5 in the animalId variable
  */

  const history = useHistory()

  const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        history.push("/animals")
      })
  }

  const { animalId } = useParams();

  useEffect(() => {
    const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }

    setAnimal(thisAnimal)
  }, [animalId])

  return (
    <>
      <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">Location: {animal.location.name}</div>
        <div className="animal__owner">Customer: {animal.customer.name}</div>
      </section>
      <button>Update Status</button>
      <button onClick={handleRelease}>{animal.name} found a furever home!</button>
    </>
  )
}
