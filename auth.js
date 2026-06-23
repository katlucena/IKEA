const createAccountBtn = document.getElementById("createAccount");
const authForms = document.getElementById("authForms");
const closeForms = document.getElementById("closeForms");

const signupForm = document.getElementById("signupForm");

const agreementCheckbox = document.getElementById("agreeTerms");
const createButton = document.getElementById("submitCreateAccount");

// OPEN DRAWER

createAccountBtn.addEventListener("click", () => {
  authForms.classList.add("open");
  authForms.setAttribute("aria-hidden", "false");
});

// CLOSE DRAWER

closeForms.addEventListener("click", () => {
  authForms.classList.remove("open");
  authForms.setAttribute("aria-hidden", "true");
});

// CLOSE WHEN CLICKING BACKDROP

authForms.addEventListener("click", (e) => {
  if (e.target === authForms) {
    authForms.classList.remove("open");
    authForms.setAttribute("aria-hidden", "true");
  }
});

// PASSWORD TOGGLE

document.querySelectorAll(".password-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.parentElement.querySelector("input");

    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";

    button.setAttribute("aria-pressed", String(isPassword));
  });
});

// TERMS & CONDITIONS

createButton.disabled = true;

agreementCheckbox.addEventListener("change", () => {
  createButton.disabled = !agreementCheckbox.checked;
});

// SIGN UP

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("su-fname").value.trim();

  const lastName = document.getElementById("su-lname").value.trim();

  const email = document.getElementById("su-email").value.trim();

  if (!firstName || !lastName || !email) {
    alert("Please complete all required fields.");
    return;
  }

  if (!agreementCheckbox.checked) {
    alert("Please agree to the Terms and Privacy Policy.");
    return;
  }

  localStorage.setItem("userFirstName", firstName);

  // trigger fade-out
  document.body.classList.add("page-exit");

  // wait for animation before redirect
  setTimeout(() => {
    window.location.href = "home.html";
  }, 300);
});

function updateCreateButtonState() {
  createButton.disabled = !agreementCheckbox.checked;
}

agreementCheckbox.addEventListener("change", updateCreateButtonState);

window.addEventListener("pageshow", () => {
  updateCreateButtonState();
});

updateCreateButtonState();

const firstName = document.querySelector("#firstName").value;

localStorage.setItem("firstName", firstName);
