import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  // let massValueGreater =[];
  // for(let planet of data.planets){
  //   if(planet.mass.massValue>=number){
  //     massValueGreater.push(planet.name)
  //   }
  // }
  // return massValueGreater
  return data.planets
  .filter(mass => mass.mass.massValue>=number)
  .map(planet => planet.name)
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
