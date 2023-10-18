import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
  // Your code goes here...
  let names = []
  for(let planet of data.planets){
    names.push(planet.name)
  }
  return names;
}


// function getPlanetNamestwo(data){
//   let names = []
//   for(let i=0; i<data.length;i++){
//     names.push(data.planets.names);
//   }
//   return names;
// }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
