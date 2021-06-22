const formContact = () => {
console.log('si funciono')

    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let message = document.getElementById("message").value;

    alert(`Bienvenido ${name} Tu fecha de nacimiento es ${birthday} Gracias por escribir este mensaje: ${message}`);
}

let ballRed = document.getElementById("ballRed");
let ballBlue = document.getElementById("ballBlue");
ballRed.style.display = "block";
ballBlue.style.display = "none";
