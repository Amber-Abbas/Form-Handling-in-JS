function set_error(id, error) {
  var element = document.getElementById(id);
  console.log("id", id);
  var errorElement = element.querySelector(".form-error");
  console.log("errorElement", errorElement, "id", id);
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
  var compNameInput = document.getElementById("comp-name");
  var prefixInput = document.getElementById("prefix");
  var startNoInput = document.getElementById("start-no");
  var prefixInput = document.getElementById("prefix");
  var codeLengthInput = document.getElementById("code-length");
  if (prefixInput.value.length === 0) {
    set_error("prefix-box", "prefix is required"); // Clear the error if it's valid
  } else {
    set_error("prefix-box", "");
  }
  if (startNoInput.value.length === 0) {
    set_error("start-no-box", "start-no is required"); // Clear the error if it's valid
  } else {
    set_error("start-no-box", "");
  }

  if (codeLengthInput.value.length === 0) {
    set_error("code-length-box", "code-lungth is required"); // Clear the error if it's valid
  } else {
    set_error("code-length-box", "");
  }

  if (compNameInput.value.length === 0) {
    console.log(compNameInput.value.length);
    set_error("comp-name-box", "Company Name is required"); // Clear the error if it's valid
  } else {
    set_error("comp-name-box", "");
  }

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
    set_error("email-box", "Email is required");
  } else if (!emailInput.value.match(validRegex)) {
    set_error("email-box", "Invalid email address");
  } else {
    set_error("email-box", "");
  }

  return true; // Or you can return false if validation fails
}
