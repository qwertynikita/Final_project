document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Простий приклад
  if (email && password) {
    const user = { email: email };
    localStorage.setItem('mc_user', JSON.stringify(user));

    // Переходимо до кошика
    window.location.href = 'basket.html';
  } else {
    alert("Будь ласка, введіть правильні дані.");
  }
})
;
