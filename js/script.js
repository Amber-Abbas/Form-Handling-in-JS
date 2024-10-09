function set_error(id, error) {
  // Set errors inside the tag of the element with the given id
  var element = document.getElementById(id);
  console.log(element, id);
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
  var emailInput = document.getElementById("email");
  var contInput = document.getElementById("phone");

  if (contInput.value.length === 0) {
    set_error("phone-box", "Phone number is required");
  } else if (/^[0-9()\-+]*$/.test(contInput.value)) {
    set_error("phone-box", ""); // Clear the error if it's valid
  } else {
    set_error("phone-box", "Phone number is invalid");
  }

  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInput.value.length === 0) {
    set_error("email-box", "Email should not be empty");
  } else if (!emailInput.value.match(validRegex)) {
    set_error("email-box", "Invalid email address");
  } else {
    set_error("email-box", "");
  }

  return true; // Or you can return false if validation fails
}
