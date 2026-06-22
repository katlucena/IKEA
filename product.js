const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityEl = document.getElementById("quantity");

let quantity = 1;

// update UI
function updateQuantity(value) {
  quantity = value;
  quantityEl.textContent = quantity;
}

// + button
increaseBtn.addEventListener("click", () => {
  updateQuantity(quantity + 1);
});

// − button
decreaseBtn.addEventListener("click", () => {
  if (quantity > 1) {
    updateQuantity(quantity - 1);
  }
});

const favoriteButton = document.querySelector(".favorite-button");
const favoriteIcon = favoriteButton?.querySelector(".favorite-icon");
const productCopy = document.getElementById("productCopy");
if (favoriteButton && favoriteIcon) {
  favoriteButton.addEventListener("click", () => {
    const defaultSrc = favoriteIcon.dataset.defaultSrc;
    const activeSrc = favoriteIcon.dataset.activeSrc;
    const isToggled = favoriteButton.classList.toggle("toggled");
    favoriteIcon.src = isToggled ? activeSrc : defaultSrc;
    favoriteButton.setAttribute("aria-pressed", String(isToggled));
  });
}

const toast = document.getElementById("toast");

document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    showToast("Added to cart");
  });
});

function showToast(message = "Added to cart") {
  toast.querySelector("span").textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

document.querySelectorAll(".accordion").forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    accordion.classList.toggle("active");

    if (accordion.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
