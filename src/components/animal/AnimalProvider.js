import React, { useState, createContext } from "react"

/* AnimalProvider.js exports context and provider. These work in conjuction to give other components access to the data. */

export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
	const [animals, setAnimals] = useState([]) /* when you invoke state hook (useState(c), it returns an array: [a, b]. Part one sets state as an empty array: variable a(animals) = c ([] empty array). Part two: variable b (setanimals) that stores a function to update variable a (animals)

    variable a (animals) is where the actual state grabbed from the API is stored. */

	const getAnimals = () => {
		return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
			.then(res => res.json())
			.then(setAnimals)
	}

	const addAnimal = animalObj => {
		return fetch("http://localhost:8088/animals", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(animalObj)
		})
			.then(getAnimals)
	}

	// const addAnimals = animal => {
	// 	return fetch("http://localhost:8088/animals", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify(animal)
	// 	})
	// 		.then(response => response.json())
	// }
	/*
			You return a context provider which has the
			`animals` state, `getAnimals` function,
			and the `addAnimal` function as keys. This
			allows any child elements to access them.
	*/

	const releaseAnimal = animalId => {
		return fetch(`http://localhost:8088/animals/${animalId}`, {
			method: "DELETE"
		})
			.then(getAnimals)
	}

	return (
		<AnimalContext.Provider value={{
			animals, getAnimals, addAnimal, releaseAnimal/* this lets other components know what they can access */
		}}>
			{props.children}
		</AnimalContext.Provider>
	)
}
