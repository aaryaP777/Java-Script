// function to return a number
function avg(x, y){             
    return (x+y)/2;
}

// function to return a number
const sum = (p,q) => {
    return p + q;
}

// function to return a string
const text = () => {
    console.log("Hello how are you...");
    return "Fine fine..."
}


console.log("Average = " + avg(4,5));

console.log("Sum = " + sum(3,4));

text();                               // gives only the console output (for string returning function)

const v = text();
console.log(v);                       // gives the return output (for string returning function)