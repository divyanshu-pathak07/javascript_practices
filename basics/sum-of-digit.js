let a = 12345;
let sum = 0;
while(a>0){
    sum = sum + a%10;
    a = Math.floor(a/10);
}
console.log(`Sum of digit ${sum}`)