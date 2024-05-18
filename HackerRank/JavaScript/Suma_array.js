// Dado un array de enteros, encuentra la suma de sus elementos.
// Por ejemplo si el array esta conformado por los elementos 1, 2 y 3 la suma de estos deberá ser 6.

// Solucion 1
function sumItems(array){
    let suma = 0
    for(let index = 0; index < array.length; index++){
        suma += parseInt(array[index])
    }
    return suma
}
let call = sumItems([1,2,3,4,10,11])
console.log(call)


// Solucion 2
function sumItems(array){
    let suma = 0
    arrayNum = Array.from(array)
    for(let i = 0; i<arrayNum.length; i++){
        suma += parseInt(arrayNum[i])
    }
    return suma
}
let entrada = prompt("")
numeros_str = entrada.split(" ")
numeros_array = []
for(let i = 0; i<numeros_str.length; i++){
    numero = parseInt(numeros_str[i])
    numeros_array.push(numero)
}
let llamado = sumItems(numeros_array)
console.log(llamado)



// Solucion 3
function sumItems(arr) {
    let suma = 0;
    for (let item of arr) {
        suma += item;
    }
    return suma;
}

let arrayItems = [];
let numerosIngresar = parseInt(prompt("Ingresa el numero de elementos del arreglo: "));

for (let i = 0; i < numerosIngresar; i++) {
    let numeros = parseInt(prompt("Ingresa el elemento: "));
    arrayItems.push(numeros);
}

let calling = sumItems(arrayItems);
console.log(calling);


// Solucion 4 (Solucion Aceptada por el compilador de Hacker Rank)
function sumItems(){
    let size = parseInt(prompt(""))
    let arr = prompt("")
    let split = arr.split(" ")
    let arr_n = []
    for (let i = 0; i < split.length; i++) {
        arr_n.push(parseInt(split[i]))
    }
    let suma = 0
    for(let i = 0; i< arr_n.length; i++){
        suma += arr_n[i];
    }
    return console.log(suma)
}
sumItems()

//FIN