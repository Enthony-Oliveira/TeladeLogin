document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const usernameInput = document.getElementById('register-username');
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            let isValid = true;
            let messages = [];

            if (usernameInput.value.trim() === '') {
                isValid = false;
                messages.push('O nome de usuário não pode estar vazio.');
            }

            if (emailInput.value.trim() === '') {
                isValid = false;
                messages.push('O e-mail não pode estar vazio.');
            } else if (!isValidEmail(emailInput.value)) {
                isValid = false;
                messages.push('Por favor, insira um e-mail válido.');
            }

            if (passwordInput.value.trim() === '') {
                isValid = false;
                messages.push('A senha não pode estar vazia.');
            } else if (passwordInput.value.length < 6) {
                isValid = false;
                messages.push('A senha deve ter pelo menos 6 caracteres.');
            }

            if (confirmPasswordInput.value.trim() === '') {
                isValid = false;
                messages.push('A confirmação de senha não pode estar vazia.');
            } else if (passwordInput.value !== confirmPasswordInput.value) {
                isValid = false;
                messages.push('As senhas não coincidem.');
            }

            if (isValid) {
                alert('Registro realizado com sucesso!');
            } else {
                alert('Erros no formulário:\n' + messages.join('\n'));
            }
        });
    }

    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const passwordContainer = this.parentElement;
            const passwordField = passwordContainer.querySelector('input');

            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);

            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });
});