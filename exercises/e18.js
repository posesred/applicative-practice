import { maxBy } from "./e17";
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const discoveryCount = {};


  for (let asteroid of data.asteroids) {
      if (discoveryCount[asteroid.discoveryYear]) {
          discoveryCount[asteroid.discoveryYear]++;
      } else {
          discoveryCount[asteroid.discoveryYear] = 1;
      }
  }


  let yearArray = [];
  for (let year in discoveryCount) {
      if (discoveryCount.hasOwnProperty(year)) { 
          yearArray.push(year);
      }
  }

  const yearWithMostDiscoveries = maxBy(
      yearArray,
      (year) => discoveryCount[year]
  );

  return parseInt(yearWithMostDiscoveries);
}








// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
