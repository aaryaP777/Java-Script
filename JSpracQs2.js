
let array = [1,2,3,4,5,6, 50, 400, 230, 10]

const prompt = require('prompt-sync')()

// 1
// for(let i of array){
//     console.log(i)
// }

// let ele = prompt("Enter element: ")
// ele = Number.parseInt(ele)

// array.push(ele)
// console.log(array)

// 2
// do{
//     ele = prompt("Enter element: ")
//     ele = Number.parseInt(ele)
//     array.push(ele)
// }while(ele != 0)

// console.log(array)

// 3
// let divTen = array.filter((value) => {
//     if (value % 10 === 0){
//         return value
//     }
// })
// console.log(divTen)

// 4
// let sqArr = array.map((value) => {
//     return value**2
// })
// console.log(sqArr)

// 5
let n = array.reduce((e1, e2) => {
    return e1*e2
})
console.log(n)