document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
      event.preventDefault();
      alert("The emails do not match. Please check and try again.");
    }
  });
});
