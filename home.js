/* ============================ */
/* IMAGE SEARCH (CAMERA BUTTON)  */
/* ============================ */
const cameraBtn = document.getElementById("cameraBtn");
const imageUpload = document.getElementById("imageUpload");

cameraBtn.addEventListener("click", () => {
  imageUpload.click();
});

imageUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    console.log("Selected image:", file.name);
    // Your image search logic here
    // Upload to server, run AI search, etc.
  }
});

/* ============================ */
/* PROMO CAROUSEL DOTS           */
/* ============================ */
const scrollContainer = document.getElementById("promoScroll");
const slides = scrollContainer.querySelectorAll(".promo-banner");
const dots = document.querySelectorAll(".dot");

scrollContainer.addEventListener("scroll", () => {
  const slideWidth = slides[0].offsetWidth;
  const index = Math.round(scrollContainer.scrollLeft / slideWidth);
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index]?.classList.add("active");
});

/* ============================ */
/* FAVORITE BUTTONS (ALL CARDS + PRODUCT DETAIL) */
/* ============================ */
document.querySelectorAll(".favorite-button").forEach((favoriteButton) => {
  const favoriteIcon = favoriteButton.querySelector(".favorite-icon");
  if (!favoriteButton || !favoriteIcon) return;

  favoriteButton.addEventListener("click", () => {
    const defaultSrc = favoriteIcon.dataset.defaultSrc;
    const activeSrc = favoriteIcon.dataset.activeSrc;
    const isToggled = favoriteButton.classList.toggle("toggled");
    favoriteIcon.src = isToggled ? activeSrc : defaultSrc;
    favoriteButton.setAttribute("aria-pressed", String(isToggled));
  });
});

// prevent buttons inside top-seller cards (favorite, add-to-cart, AR camera)
// from also triggering the card's "open product detail" click
document.querySelectorAll(".top-seller-card button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

/* ============================ */
/* TOAST ("Added to cart")       */
/* ============================ */
const toast = document.getElementById("toast");

function showToast(message = "Added to cart") {
  toast.querySelector(".toast-text").textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

document.querySelectorAll(".add-btn, .add-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    showToast("Added to cart");
  });
});

/* ============================ */
/* ACCOUNT DRAWER                */
/* ============================ */
const accountBtn = document.getElementById("accountBtn");
const accountDrawer = document.getElementById("accountDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const closeDrawer = document.getElementById("closeDrawer");

accountBtn.addEventListener("click", () => {
  accountDrawer.classList.add("open");
  drawerOverlay.classList.add("show");
});

closeDrawer.addEventListener("click", closeAccountDrawer);
drawerOverlay.addEventListener("click", closeAccountDrawer);

function closeAccountDrawer() {
  accountDrawer.classList.remove("open");
  drawerOverlay.classList.remove("show");
}

const name = localStorage.getItem("userFirstName");

if (name) {
  document.querySelector(".drawer-header h2").textContent = `Hej, ${name}!`;
}

/* ================================== */
/* PRODUCT DETAIL SLIDING PANEL        */
/* (replaces navigating to product.html) */
/* ================================== */
const productDetail = document.getElementById("productDetail");
const ekolsundCard = document.getElementById("ekolsund-card");
const closeProductDetail = document.getElementById("closeProductDetail");

ekolsundCard?.addEventListener("click", () => {
  openProductDetail();
});

closeProductDetail?.addEventListener("click", () => {
  closeProductDetailPanel();
});

function openProductDetail() {
  productDetail.classList.add("open");
}

function closeProductDetailPanel() {
  productDetail.classList.remove("open");
}

/* ---- quantity stepper (scoped to product detail panel) ---- */
const decreaseBtn = productDetail.querySelector("#decrease");
const increaseBtn = productDetail.querySelector("#increase");
const quantityEl = productDetail.querySelector("#quantity");

let quantity = 1;

function updateQuantity(value) {
  quantity = value;
  quantityEl.textContent = quantity;
}

increaseBtn?.addEventListener("click", () => {
  updateQuantity(quantity + 1);
});

decreaseBtn?.addEventListener("click", () => {
  if (quantity > 1) {
    updateQuantity(quantity - 1);
  }
});

/* ---- swatch color/image swap (scoped to product detail panel) ---- */
const productImage = productDetail.querySelector("#productImage");

productDetail.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    productDetail
      .querySelectorAll(".swatch")
      .forEach((s) => s.classList.remove("selected"));
    swatch.classList.add("selected");

    const newImage = swatch.dataset.image;
    if (newImage && productImage) {
      productImage.src = newImage;
    }
  });
});

/* ---- accordions (scoped to product detail panel) ---- */
productDetail.querySelectorAll(".accordion").forEach((accordion) => {
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
