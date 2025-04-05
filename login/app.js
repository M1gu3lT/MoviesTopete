const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const visibleCheckbox = document.getElementById("visible");

        // Función para manejar el login
        const ingresar = () => {
            const user = usuario.value.trim();
            const pass = password.value.trim();

            if (user && pass) {
                window.location.href = "home.html";
            } else {
                alert("Por favor, ingresa tu usuario y contraseña.");
            }
        };
        loginButton.addEventListener("click", ingresar);

        // visualisar o no la contraseña
        visibleCheckbox.addEventListener("change", () => {
            if (visibleCheckbox.checked) {
                password.type = "text";
            } else {
                password.type = "password";
            }
        });
