document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar a lógica de autenticação, se necessário

    // Se a validação for bem-sucedida, redirecione para a página home
    window.location.href = "http://127.0.0.1:5502/views/home.html";
});
