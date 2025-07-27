const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.querySelector('input[type="text"]').value;
  let password = document.querySelector('input[type="password"]').value;

  fetch("https://script.google.com/macros/s/AKfy.../exec", {
    method: "POST",
    body: new URLSearchParams({
      username: username,
      password: password,
      action: "login", // یا "signup" اگر فرم ثبت‌نام باشد
    }),
  })
    .then((res) => res.text())
    .then((txt) => {
      if (txt === "success") {
        alert("✅ Login successful!");
        window.location.href = "dashboard.html"; // یا صفحه موردنظر
      } else if (txt === "fail") {
        alert("❌ Login failed!");
      } else if (txt === "signedup") {
        alert("✅ Signup successful!");
      }
    });
});
