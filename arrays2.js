let array2 = [1,2,3,4,5,6]
console.log("array is : ", array2)

console.log("-------Array operations-------")

console.log(array2)
console.log(array2.length)
delete array2[0]                         // doesnt change array length, 
console.log(array2)                      // deletes only the element, not the index
console.log(array2.length)

let array3 = [100, 200, 300, 400, 500, 600, 700]
let array_2_3 = array2.concat(array3)                // joins 2 or more arrays
console.log(array_2_3)

let array4 = [56, 900, 12, 0, 344, 3002, 734]
let s = array4.sort()                                    //sorts array like dictionary manner
console.log(s)

let sp = array2.splice(2, 3, 999, 9999, 999999)            // removes array elements starting from first index upto length
console.log(sp)                                            // can also add elements mentioned after length
console.log(array2)

let sl = array2.slice(0, 3)                                  //slices the array from starting index to end index-1
console.log(sl)