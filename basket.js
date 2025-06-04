document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const emptyMessage = document.getElementById("empty-message");
  const checkoutBtn = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("mc_cart")) || [];

  function renderCart() {
    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      emptyMessage.style.display = "block";
      cartTotal.textContent = "0.00";
      return;
    } else {
      emptyMessage.style.display = "none";
    }

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        <span>${item.name} — ${item.quantity} шт.</span>
        <span>₴${itemTotal.toFixed(2)}</span>
        <button onclick="removeItem(${index})">✖</button>
      `;
      cartList.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
  }

  window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("mc_cart", JSON.stringify(cart));
    renderCart();
  }

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Ваш кошик порожній");
      return;
    }
    window.location.href = "login.html"; // Переадресація на сторінку входу
  });

  renderCart();
});
