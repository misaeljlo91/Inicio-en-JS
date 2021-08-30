// Ordenar una matríz

console.log("---1.1. Alumnos---")

let classNames = ["Federico D.", "Jesús C.", "Branko H.", "Luis M.", "Nicolás C.", "Miguel A.", "Federico V.", "Misael L.", "Franco S.", "Rocio C.", "Ezequiel T."]

let listOrder = classNames.sort()

console.log("First names on the list:" + " " + classNames[0])

console.log("Last names on the list:" + " " + classNames[10])

console.log("---1.2. Listado ordenado de alumnos---")
for(let i = 0; i < classNames.length; i = i + 1){
    console.log(`Name: ${classNames[i]}`)
}

//Bucle sobre una matríz

let studentsAge = [34, 22, 25, 22, 24, 23, 21, 29, 24, 27, 26]

let i = 0

console.log("---2.1. Edades de los alumnos---")
while(i < studentsAge.length){
    for(i = 0; i < studentsAge.length; i++){
        console.log(studentsAge[i])
    }
}

console.log("---2.2. Edades pares---")
for(i = 0; i < studentsAge.length; i++){
    if(studentsAge[i]%2 === 0){
        console.log(studentsAge[i])
    }
}

// Funciones

let aleatoryNumbers = [77, 100, 85, 20, 12, 55, 2, 24, 20, 49, 33, 55, 104, 78, 104, 74, 45, 7, 85, 2, 100, 12]

    //E. Nro. 3 - Mostrar número menor

console.log("---3. Número menor---")

function lowestNumber(arrayMin){
    return Math.min(...arrayMin)
}
console.log(`The lowest number is: "${lowestNumber(aleatoryNumbers)}"`)

    //E. Nro. 4 - Mostrar número mayor

console.log("---4. Número mayor---")

function biggerNumber(arrayMax){
    return Math.max(...arrayMax)
}
console.log(`The bigger number is: "${biggerNumber(aleatoryNumbers)}"`)

    //E. Nro. 5 - Mostrar número basado en la posición

console.log("---5. Posición de un número---")

let index = 16;

function positionNumber(array,i){
    return array[i];    
}
let position = positionNumber(aleatoryNumbers,index)
console.log(`The number in position ${index} is: "${position}"`)

    //E. Nro. 6 - Mostrar números repetitivos

console.log("---6. Números repetidos---")

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

let repeat = repeatNumber(aleatoryNumbers)
console.log(repeat)

    //E. Nro. 7 - Elementos en cadena

console.log("---7. Cadena en una matríz---")

let colors = ["Red", "Green", "White", "Black"]

function chainArry(array){
    return array.join(", ")
}
console.log(chainArry(colors))