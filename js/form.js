const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

form.addEventListener("submit", e => {
  e.preventDefault();
  if( checkInputs() ==  true){
    ModalOpen()
  }
});

function checkInputs() {
  //Get the value the form field.
  const usernameValue = username.value.trim(); //trim to delete blanc space.
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  let checked = true;
  if (usernameValue === "") {
    setErrorInput(username, "Adinizi daxil edin");
    checked = false;
  } else {
    setSuccessInput(username);
  }

  //###################################
  if (emailValue === "") {
    setErrorInput(email, "Emailinizi daxil edin");
    checked = false;
  } else {
    validateEmail(emailValue) && setSuccessInput(email);
  }

  //###################################
  if (passwordValue === "") {
    setErrorInput(password, "Telefon nomrenizi daxil edin");
    checked = false;
  } else {
    setSuccessInput(password) && validatePassword(passwordValue);
  }

  //###################################
  if (password2Value === "") {
    setErrorInput(password2, "Kurs seçin");
    checked = false;
  } else {
    setSuccessInput(password2);
  }
  return checked;
}

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = errorMessage;
  formControl.className = "form__control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

function validateEmail(email) {
  let regular_expressions = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

function validatePassword(password) {
  let regular_expressions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regular_expressions.match(regular_expressions);
}



function ModalOpen() {
  $("#register-btn").attr("data-toggle", "modal")
  $("#register-btn").attr("data-target", "#exampleModal")
}