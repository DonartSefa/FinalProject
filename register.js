const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  // e.preventDefault()
  let erorrs = [];
  if (username) {
    errors = getSignupFormErrors(
      username.value,
      email.value,
      password.value,
      confirm_password.value
    );
  } else {
    errors = getLoginFormErrors(email.value, password.value);
  }
  if (errors.length > 0) {
    e.preventDefault();
  }
});

function getSignupFormErrors(username, email, password, confirm_password) {
  let errors = [];

  if (username === "" || username == null) {
    errors.push("Username is required");
    username.parentElement.classList.add("incorrect");
  }
  if (email === "" || email == null) {
    errors.push("Email is required");
    email.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    password.parentElement.classList.add("incorrect");
  }
  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];
  if (email === "" || email == null) {
    errors.push("Email is required");
    email.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    password.parentElement.classList.add("incorrect");
  }

  return errors;
}
