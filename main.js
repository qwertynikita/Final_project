document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  const cartCount = document.getElementById("cart-count");

  // Отримуємо кошик з localStorage або створюємо новий
  let cart = JSON.parse(localStorage.getItem("mc_cart")) || [];

  // Функція оновлення лічильника товарів у кошику
  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }

  // Обробка натискання на кнопку "Додати в кошик"
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");
      const name = product.querySelector("h3").innerText;
      const price = parseFloat(product.querySelector(".price").dataset.price);
      const quantityInput = product.querySelector("input[type='number']");
      const quantity = parseInt(quantityInput.value) || 1;

      // Перевірка, чи є товар у кошику
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({ name, price, quantity });
      }

      // Збереження оновленого кошика в localStorage
      localStorage.setItem("mc_cart", JSON.stringify(cart));

      // Оновлення лічильника товарів
      updateCartCount();

      // Можна додати повідомлення, що товар додано
      alert(`Додано ${quantity} × ${name} до кошика`);
    });
  });

  // Показати лічильник при завантаженні сторінки
  updateCartCount();
});
