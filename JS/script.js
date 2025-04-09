document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");

    button.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("password-confirmation").value.trim();

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("⚠️ Preencha todos os campos!");
            return;
        }

        if (password !== confirmPassword) {
            alert("❌ As senhas não coincidem! Verifique e tente novamente.");
            return;
        }

        alert(`✅ Cadastro realizado com sucesso!\n\n👤 Nome: ${name}\n📧 Email: ${email}`);
        
        // Opcional: Limpar os campos do formulário após envio
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password-confirmation").value = "";
    });
});
