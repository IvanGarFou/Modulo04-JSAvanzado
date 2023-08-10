//Trabajando con Arrays
let numeros = [1,2,3,4,5,5,1,16]
let resultadoSuma = 0

for(let i = 0; i < numeros.length; i++){
    resultadoSuma += numeros[i]
}

console.log("Suma total es: " + resultadoSuma)