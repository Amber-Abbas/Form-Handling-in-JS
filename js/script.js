function set_error(id, error) {
  // Set errors inside the tag of the element with the given id
  var element = document.getElementById(id);
  var errorElement = element.querySelector(".form-error");
  console.log("errorElement", errorElement);
  if (errorElement) {
    errorElement.innerHTML = error;
    errorElement.style.color = "red";
  }
}

function validateForm(event) {
  event.preventDefault();
  let errors = [];
  // Get the input elements by their ID
  var emailInput = document.getElementById("email");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInput.value.length < 3 || !emailInput.value.match(validRegex)) {
    set_error("email-box", "Invalid email address");
  } else {
    set_error("email", "");
  }
  return true;
}
