let a = 0;
let b  = 1;
let steps = 10;
let temp;
let sum = 0;
for(let i = 1; i<= steps -2 ; i++){
    sum = a + b;
    temp = b;
    b = sum;
    a = temp;

}
console.log(`Fibonacci = ${sum}`)