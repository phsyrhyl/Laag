const authPage = document.getElementById("authPage");
const portfolio = document.getElementById("portfolio");
const authMessage = document.getElementById("authMessage");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

document.getElementById("registerBtn").addEventListener("click", function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        authMessage.style.color = "red";
        authMessage.textContent = "Please enter username and password.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.username === username)) {
        authMessage.style.color = "red";
        authMessage.textContent = "Username already exists!";
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    authMessage.style.color = "green";
    authMessage.textContent = "Registration successful!";
    usernameInput.value = "";
    passwordInput.value = "";
});

document.getElementById("loginBtn").addEventListener("click", function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        authPage.style.display = "none";
        portfolio.style.display = "block";
        authMessage.textContent = "";
    } else {
        authMessage.style.color = "red";
        authMessage.textContent = "Incorrect username or password.";
    }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
    portfolio.style.display = "none";
    authPage.style.display = "block";
    usernameInput.value = "";
    passwordInput.value = "";
    authMessage.style.color = "blue";
    authMessage.textContent = "You have logged out successfully.";
});
