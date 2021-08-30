// Ejercicios

//Ejercicio Nro. 1

console.log("---1. Crear un array que contenga diez números enteros---")

let integerNumbers = [14, 10, 7, 56, 33, 24, 62, 59, 11, 2, 100, 7, 14, 24]

for(i = 0; i < integerNumbers.length; i++){
    console.log(integerNumbers[i])
}

//Ejercicio Nro. 2

console.log("---2. Recorrer el array del punto 1, contar la cantidad de números pares y mostrar esa cantidad por la consola---")

for(i = 0; i < integerNumbers.length; i++){
    if(integerNumbers[i]%2 === 0){
        console.log(integerNumbers[i])
    }
}

//Ejercicio Nro. 3

console.log(`---3. Crear una función que reciba por parámetro un array y un índice, y que evalúe si el contenido del array en dicho índice sea el mayor valor del array. De ser así, que imprima un mensaje por consola que diga "Es mayor", en caso contrario que diga "No es mayor"---`)

let index = 2;

function positionNumber(array,i){
    if(array[i] >= Math.max(...array)){
        return "Es mayor"
    }
    return "No es mayor"
}

let position = positionNumber(integerNumbers,index)
console.log(`El número en la posición ${index} "${position}"`)

//Ejercicio Nro. 4

console.log(`---4. Crear una función que reciba un número entero como parámetro. Mostrar por consola la calificación según la nota ingresada como argumento:
o   0-3: Muy deficiente
o   4-5: Insuficiente
o   6: Suficiente
o   7: Bien
o   8-9: Notable
o   10: Sobresaliente`)

let numero = 111

function academicGrade(numero){
    if(numero <= 3 || numero <= 5){
        if(numero <= 3){
            return `Su calificación es ${numero}: Muy deficiente`
        }
        return `Su calificación es ${numero}: Insuficiente`
    }
    if(numero == 6 || numero == 7){
        if(numero == 6){
            return `Su calificación es ${numero}: Suficiente`
        }
        return `Su calificación es ${numero}: Bien`
    }
    if(numero < 10 || numero == 10 || numero >= 11){
        if(numero == 10){
            return `Su calificación es ${numero}: Sobresaliente`
        }
        if(numero < 10){
            return `Su calificación es ${numero}: Notable`
        }
        return `La nota ingresada no es válida, por favor, introduzca una nueva nota entre 0 ó 10 puntos`
    }
}

console.log(academicGrade(numero))

//Ejercicio Nro. 5

console.log("---5. Crear una función que reciba por parámetro un array. Se deben encontrar los números repetidos para luego mostrar por consola cuántos números se repiten---")

function repeatNumber(array){
    let newArray = []
    for(i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] == array[j]){
                newArray.push(array[i])
            }
        }
    }
    return newArray.join(", ")
}

let repeat = repeatNumber(integerNumbers)
console.log(repeat)