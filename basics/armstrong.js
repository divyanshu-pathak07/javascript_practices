let a = 370;
let sum = 0;
let d = a.toString().length;
let digits;
let temp = a;
while(a >0){
    digits = a % 10;
    sum = sum + digits ** d;
    a = Math.floor(a/10);
}
if (temp === sum){
    console.log("Armstrong number")
}
else{
    console.log("Not armstrong number")
}