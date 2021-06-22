var a = 1; //cariable de cualquier tipo  String, int, boolean, float, long, char, double              Se setea automaticamente
let b = 2; //variable de cuaquier tipo  String, int, boolean, float, long, char, double               Espera a que concluya la peticion o el proceso
const c = 3; //declarar constantes 


const suma = (num1,num2) => num1+num2;
console.log(suma(3,2));

const resta = (num1,num2) => num1-num2;
console.log(resta(5,4));

const multiplcacion = (num1,num2) => num1*num2;
console.log(multiplcacion(7,6));

const division = (num1,num2) => num1/num2
console.log(division(5,6));


const ciclo = (num1) => {
    for ( i = num1; i <= 1000; i = i * num1) {
        console.log(`${i}`);         
    }
    console.log(`Tu número ya alcanzo al 1000, se termina el ciclo, Gracias!`)
}
console.log(ciclo(2));