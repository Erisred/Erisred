// toggle from light mode to dark mode
// requires css variables defined in :root, then a set of alternate variables under body.light-theme that will be active when the link is clicked

// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
// Select the text fo the link
var toggleText = document.getElementById("btn-toggle");

// If the current theme in localStorage is "dark"...
if (currentTheme == "light") {
  // ...then use the .dark-theme class
  document.body.classList.add("light-theme");
  toggleText.innerHTML = "Light theme";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}