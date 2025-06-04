document.getElementById("register-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("register-username").value.trim();
      const password = document.getElementById("register-password").value.trim();

      if (!username || !password) {
        alert("Будь ласка, заповніть усі поля.");
        return;
      }

      if (localStorage.getItem("user_" + username)) {
        alert("Такий акаунт вже існує.");
        return;
      }

      localStorage.setItem("user_" + username, password);
      alert("Реєстрація успішна! Тепер увійдіть.");
      window.location.href = "login.html";
    });