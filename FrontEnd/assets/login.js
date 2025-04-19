const form = document.getElementById("login-form");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  // Handle form data here
  console.log("Form submitted!");
});