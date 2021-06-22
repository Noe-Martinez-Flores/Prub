//Noé Martínez Flores 3°B 
const resultSum = () => {
    let sum1 = parseInt(document.getElementById("sum1").value);
    let sum2 = parseInt(document.getElementById("sum2").value);
    let result =(sum1+sum2);

    alert(`${sum1} + ${sum2} = ${result}`);
    alert(sum1 + sum2);

}

const resultSubtraction = () => {
    let subtraction1 = parseInt(document.getElementById("subtraction1").value);
    let subtraction2 = parseInt(document.getElementById("subtraction2").value);
    let result = (subtraction1 - subtraction2);

    alert(`${subtraction1} - ${subtraction2} = ${result}`);

}

const resultMultiplication = () => {
    let multiplication1 = parseInt(document.getElementById("multiplication1").value);
    let multiplication2 = parseInt(document.getElementById("multiplication2").value);
    let result = (multiplication1 * multiplication2);

    alert(`${multiplication1} * ${multiplication2} = ${result}`);

}

const resultDivision = () => {
    let division1 = parseInt(document.getElementById("division1").value);
    let division2 = parseInt(document.getElementById("division2").value);
    let result = (division1 / division2);

    alert(`${division1} ÷ ${division2} = ${result}`);

}


