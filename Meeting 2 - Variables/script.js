var firstName = "Jeff";
var lastName = "Chang";

console.log("My name is " + firstName + lastName);

const favoriteNumber = 8;
console.log("My favorite numbers are " + favoriteNumber);

// Define variables to store my favourite movie data
var movieTitle = "Captain Marvel"; // string
var movieRate = 6.8; // float
var releaseYear = 2019; // integer
var forAllAges = false; // boolean

// Update HTML content
document.getElementById("movie-title").textContent = movieTitle;
document.getElementById("movie-rating").textContent = movieRate;
document.getElementById("movie-year").textContent = releaseYear;
document.getElementById("movie-age").textContent = forAllAges ? "Yes" : "No";