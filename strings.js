console.log("Strings in JS")

let boy1 = "Tony"
let boy2 = "Steve"
let sentence = `${boy1} is a friend of ${boy2}`  //' backtick (`) is used tp use variables in a string
console.log(sentence)

let fruit = "boy\'s" // (\) is escape sequence character
console.log(fruit)

let exp = "this\nis\nnew line" // (\n) is new line character
console.log(exp)

let string1 = "aArYa"
console.log(string1.length)
console.log(string1.toUpperCase())
console.log(string1.toLowerCase())
console.log(string1.replace("rYa", "pPle"))

let city = "Mumbai"
console.log(string1.concat(" is a boy from ", city))
 
let string2 = "thisIsAnExampleOfStringSlice"
console.log(string2.slice(3,7)) // gives string slice from 3 to 7-1 index
console.log(string2.slice(7)) // gives string slice from 7 till end
console.log(string2[10])

let string3 = "         pookie         "
console.log(string3.trim()) // removes white spaces

string4 = "Timepass"
string5 = ""
let strlen = string4.length
for(i=0; i<strlen; i++){
    string5 = string5 + string4[i]
}
console.log(string5)
