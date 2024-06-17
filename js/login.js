document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Se a validação for bem-sucedida, redirecione para a página home
    window.location.href = 'home.html';
  });
