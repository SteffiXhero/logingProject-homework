function openLogin() {
  document.querySelector('.login-form-container').classList.add('active');
}

function closeLogin() {
  document.querySelector('.login-form-container').classList.remove('active');
}

function togglePassword() {
  const passwordInput = document.getElementById('signinPassword');
  const type = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
}

document.addEventListener("DOMContentLoaded", function () {

  // ✅ SIGN IN form
  const signinForm = document.getElementById("signinForm");
  const signinMessage = document.getElementById("signinMessage");

  if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("signinEmail").value;

      signinMessage.textContent = `Welcome back, ${email}!`;
      signinMessage.classList.remove("hidden", "error");
      signinMessage.classList.add("success");

      // Optional: Reset form after message
      signinForm.reset();

      setTimeout(() => {
        signinMessage.classList.add("hidden");
        signinMessage.textContent = "";
        closeLogin(); // if you want it to disappear

        window.location.href = "Business.html";

      }, 2000);
    });
  }

  // ✅ SIGN UP form
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("signupUsername").value;

      signupMessage.textContent = `Account created successfully for ${username}`;
      signupMessage.classList.remove("hidden", "error");
      signupMessage.classList.add("success");

      // Optional: Reset the form
      signupForm.reset();

      setTimeout(() => {
        window.location.href = "signin.html";
        window.location.href = "Business.html";

      }, 2000);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const businessForm = document.getElementById("businessForm");
  const businessMessage = document.getElementById("businessMessage");

  if (businessForm) {
    businessForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show success message
      businessMessage.textContent = "You have registered successfully!";
      businessMessage.classList.remove("hidden");

      // Optionally clear the form inputs
      businessForm.reset();

      // If you want, you can hide the message after some seconds:
      setTimeout(() => {
        businessMessage.classList.add("hidden");
      }, 4000);
    });
  }
});


//document.addEventListener("DOMContentLoaded", function () {
 // const businessForm = document.getElementById("businessForm");

 // if (businessForm) {
   // businessForm.addEventListener("submit", function (e) {
      //e.preventDefault();

      // Optional: validate or process form data here

      // Redirect to home
     // window.location.href = "home.html";
    //});
 // }
//});
