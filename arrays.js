let array1 = [7, 9, null, 3.4, true, 0, "array"]
console.log("The array is: ", array1)
// console.log("Array elements are: ")
// console.log(array1[0])
// console.log(array1[1])
// console.log(array1[2])
// console.log(array1[3])
// console.log(array1[4])
// console.log(array1[5])
// console.log(array1[6])

console.log("--------------------------------------------")
 
console.log(array1[0])

let l = array1.length           //array length
console.log(l)

array1.push(1000)              // push element at the last of the array
console.log(array1)

let s = array1.shift()          // removes first element
console.log(s, array1)

console.log(array1.shift())
console.log(array1)

console.log(array1.unshift(60))      //returns new array length first and adds new element at the start
console.log(array1)                  // needs input else no changes will be seen
