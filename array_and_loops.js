let array = [2, 3, 4, 5, 6, 7, 8]

for(let i=0; i<array.length; i++){
    console.log(array[i])
}

// for each loop
array.forEach(element => {                 
    console.log(element * element)
})

//array from method (create array from given string)
let name = "123456789"
let arrayName = Array.from(name)
console.log(arrayName)

//for..of method (print array elements)
for(let i of array){
    console.log(i)
}

//for..in method (print array elements/ considers elements as key value pairs)
for(let i in array){
    console.log(i, array[i])
}

//map function (creates a whole new array)
let newArray = array.map((value, index, array) => {
    console.log(value, index, array)
    return value*2
})
console.log(newArray)

// filter method (filters array elements based on a condition)
let filterArray = array.filter((value) => {
    return value >= 5
})
console.log(filterArray)

// 
let reduceArray = array.reduce((n1, n2) => {
    return n1 + n2
})
console.log(reduceArray)