let emailDOM= document.getElementById('email-input');
let passwordDOM = document.getElementById('password-input');
const button = document.getElementById('connect-button');
localStorage.setItem('user', false)
let data = {};
emailDOM.addEventListener('change', (event) => {
    event.preventDefault()
    data.email = event.target.value
})

passwordDOM.addEventListener('change', (event) => {
    event.preventDefault()
    data.password = event.target.value
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('http://localhost:5678/api/users/login', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then(response => response.json())
    .then(data => {
        if (data.userId) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', true);
            window.location.href = "index.html";
        } else {
            alert("Erreur dans l'identifiant ou le mot de passe");
        }
    })
    .catch(error => console.error("Error:", error));

})



