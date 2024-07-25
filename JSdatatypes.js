// 7 primitive data types
let a = null;                 // null
let b = 345                   // number
let c = "Aarya"               // string
let d = Symbol("A symbol")    // symbol
let e = true                  // boolean
let f = BigInt("123")         // big int   
let g                         // undefined 
console.log(a,b,c,d,e,f,g)

// non-primitive data types:- OBJECT {KEY: VALUE pair}
const name = {
    "Adya" : 24,
    "Aarya" : 7,
    "XYZ" : true
}
console.log(name["Adya"])