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

function validateWorkHr() {
  const workHrInput = document.getElementById("work-hr");

  if (workHrInput.value >= 0 || workHrInput.value <= 9) {
    set_error("work-hr-box", " ");
  } else {
    set_error("work-hr-box", "Working hours should be in numbers"); // Clear error if valid
  }
}

function validatePhone() {
  const phoneInput = document.getElementById("phone");
  const phoneValue = phoneInput.value.trim();

  if (phoneValue.length === 0) {
    set_error("phone-box", "Phone number is required");
  } else if (/^[0-9()\-+ ]*$/.test(phoneValue)) {
    set_error("phone-box", ""); // Clear error if valid
  } else {
    set_error(
      "phone-box",
      "Phone numbers should only contain numbers, spaces, or +, -, ()"
    );
  }
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailValue.length === 0) {
    set_error("email-box", "Email is required");
  } else if (!emailValue.match(validEmailRegex)) {
    set_error("email-box", " ");
  } else {
    set_error("email-box", " Invalid Email Adress"); // Clear error if valid
  }
}
function validateForm(event) {
  event.preventDefault();
  let errors = [];

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
  validateWorkHr();
  validatePhone();
  validateEmail();

  return true; // Or you can return false if validation fails
}
