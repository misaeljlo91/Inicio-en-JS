//Funciones

//Ejercicio Nro. 1

console.log("---1.Reverse number---")

let number = 32443
console.log(`Ordered numbers: ${number}`)

function reverseNumbers(number){
    let reverse = 0;
    while(number > 0){
        reverse = reverse * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return reverse;
}

let reverseNumber = reverseNumbers(number)
console.log(`The reverse number is: "${reverseNumber}"`)

//Ejercicio Nro. 2

console.log("---2. Alphabetical order---")

let word = "webmaster";
console.log(`Word: ${word}`)

function alphabeticalOrder(srt){
    if(srt === ""){
        return "";
    }else{
        return alphabeticalOrder(srt.substr(1)) + srt.charAt (0);
    }
}

let reverseWord = alphabeticalOrder(word)
console.log(`The reverse word is: "${reverseWord}"`)

//Ejercicio Nro. 3

console.log("---3. Uppercase---")

let sentence = "prince of persia";
console.log("Sentence:" + " " + sentence)

function uppercaseSentence(srt){
    let uppercase = srt.split(" ")
    return uppercase.map(p => p[0].toUpperCase() + p.slice(1)).join(" ");
}

let uppercaseS = uppercaseSentence(sentence)
console.log(`Uppercase word by word: "${uppercaseS}"`)

//Ejercicio Nro. 4

console.log("---4. Find the longest word---")

let phrase = "Web Development Tutorial"
console.log(`Phrase: ${phrase}`)

function longestWord(phrase){
    let phrase_array = phrase.match(/\w[a-z]{0,}/gi);
    let longestW = phrase_array[0];
    for(let i =1; i < phrase_array.length; i++){
        if(longestW.length < phrase_array[i].length){
            longestW = phrase_array[i];
        }
    }
    return longestW;
}

let theLongestWord = longestWord(phrase)
console.log(`The longest word is: "${theLongestWord}"`)