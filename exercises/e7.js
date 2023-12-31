import { data } from "../data/data";

// SPACE DATA EXERCISE 7
// Return an array of all Planets names that have moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsNamesWithMoons(data) {
  // Your code goes here...
  // let moonPlanets = [];
  // for(let planet of data.planets){
  //   if(planet.moons && planet.moons.length>0){
  //     moonPlanets.push(planet.name)
  //   }
  // }
  // return moonPlanets;
  return data.planets.filter(haveMoon => haveMoon.moons && haveMoon.moons.length>0).map(names => names.name)
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
