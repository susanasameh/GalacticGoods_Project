//validation and authentication

// Get the form elements
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Function to validate registerEmail
function validateEmail(registerEmail) {
  const registerEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return registerEmailRegex.test(registerEmail);
}

// Function to validate password
function validatePassword(registerPassword) {
  const passwordRegex = /^[a-zA-Z0-9._%+-]{6,}$/;
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(registerPassword);
}

// Function to validate phone number
function validatePhone(phone) {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone);
}

// Function to validate name
function validateName(registerName) {
  const nameRegex = /^[a-zA-Z ]{2,}$/;
  return nameRegex.test(registerName);
}

// Function to validate country
function validateCountry(country) {
  const countryRegex = /^[a-zA-Z ]{2,}$/;
  return countryRegex.test(country);
}

// Function to validate and authenticate user
function validateAndAuthenticate(form) {
  const email = form.signEmail.value;
  const password = form.signPass.value;

  if (!validateEmail(email)) {
    alert("Invalid email");
    return false;
  }

  if (!validatePassword(password)) {
    alert(
      "Invalid password. Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    return false;
  }

  // Authenticate user
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    alert("Invalid email or password");
    return false;
  }

  // Login successful
  alert("Login successful");
  return true;
}

// Function to register user
function registerUser(form) {
  const name = form.registerName.value;
  const email = form.registerEmail.value;
  const password = form.registerPassword.value;
  const phone = form.phone.value;
  const country = form.country.value;

  if (!validateName(name)) {
    alert("Invalid name");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Invalid email");
    return false;
  }

  if (!validatePassword(password)) {
    alert(
      "Invalid password. Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    return false;
  }

  if (!validatePhone(phone)) {
    alert("Invalid phone number. Phone number should be 10 digits");
    return false;
  }

  if (!validateCountry(country)) {
    alert("Invalid country");
    return false;
  }

  // Register user
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ name, email, password, phone, country });
  localStorage.setItem("users", JSON.stringify(users));

  // Registration successful
  alert("Registration successful");
  return true;
}

// Add event listeners to forms
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAndAuthenticate(signinForm);
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerUser(signupForm);
});

// Add event listeners to toggle buttons

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

//Profile section
