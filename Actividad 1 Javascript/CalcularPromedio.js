const calcularPromedio = (numero) =>{
    let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

    let promedio = suma / numeros.length;
    return promedio;
}

// Prueba de la funcion
let numeros = [5, 8, 2, 10, 4];
let resultado = calcularPromedio(numeros);
console.log(resultado);