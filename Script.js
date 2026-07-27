// Splash Screen
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("login").style.display = "block";
}, 2000);

// Login Function
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("home").style.display = "block";
}