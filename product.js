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