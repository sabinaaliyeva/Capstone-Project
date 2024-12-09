// Function to open the login modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex"; // Show the modal
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        closeLoginModal();
    }
}

// Event listener for the Login button
document.getElementById("loginBtn").addEventListener("click", openLoginModal);


// Function to open the signup modal
function openSignupModal() {
    document.getElementById("signupModal").style.display = "flex"; // Show the modal
}

// Function to close the signup modal
function closeSignupModal() {
    document.getElementById("signupModal").style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("signupModal")) {
        closeSignupModal();
    }
}

// JavaScript for password validation
document.getElementById('password').addEventListener('input', function () {
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;

    if (!pattern.test(password)) {
        passwordField.setCustomValidity('Password must be at least 9 characters long, contain at least one uppercase letter, one number, and one special character.');
    } else {
        passwordField.setCustomValidity('');
    }
});

// Password strength indicator (additional functionality)
var myInput = document.getElementById("pwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
