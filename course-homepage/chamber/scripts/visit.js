// // initialize display elements
// const todayDisplay = document.querySelector("#today");
// const visitsDisplay = document.querySelector("#todayVisit");
// const daysLeftOutput = document.querySelector("#daysleft");

// // get the stored value in localStorage
// let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// // determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// // increment the number of visits.
// numVisits++;
// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);
// // show todays date demonstration
// todayDisplay.textContent = Date.now();
// //84600000 equals the number of miliseconds in one day.

// Check if there is a stored date in local storage
const lastVisited = localStorage.getItem('lastVisited');

// If there is a stored date, calculate the number of days since that date
if (lastVisited) {
  const daysSinceVisited = Math.round((Date.now() - lastVisited) / (1000 * 60 * 60 * 24));
  
  // Display the number of days on the page
  const daysElement = document.getElementById("todayVisit");
  daysElement.textContent = `It has been ${daysSinceVisited} days since you last visited this page!`;
}

// Store the current date in local storage for the next visit
localStorage.setItem('lastVisited', Date.now());
