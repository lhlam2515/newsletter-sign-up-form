const signupCard = document.querySelector(".signup-card");
const form = document.getElementById("signup-form");
const errorMsg = document.getElementById("email-error");
const emailInput = form.querySelector("input[type='email']");

const successCard = document.querySelector(".success-card");
const submittedEmail = document.getElementById("submitted-email");
const dismissBtn = successCard.querySelector("button");

const formReset = () => {
  errorMsg.textContent = "";
  emailInput.classList.remove("error");
  form.reset();
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  const data = Object.fromEntries(new FormData(event.target));
  const { email = "" } = data;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    emailInput.classList.toggle("error");
    errorMsg.textContent = "Valid email required";
    return;
  }

  submittedEmail.textContent = email;

  formReset();
  signupCard.classList.toggle("hidden");
  successCard.classList.toggle("hidden");
});

dismissBtn.addEventListener("click", () => {
  formReset();
  signupCard.classList.toggle("hidden");
  successCard.classList.toggle("hidden");
});
