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
  //toggleText.innerHTML = "Dark mode";
}

// Listen for a click on the button 
btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("light-theme");
  
  // Let's say the theme is equal to light
  let theme = "dark";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("light-theme")) {
    // ...then let's make the theme dark
    theme = "light";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});