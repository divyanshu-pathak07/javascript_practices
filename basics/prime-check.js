a = 5;
let flag = 0;
for(let i = 2; i<5 ;i++){
    if(a%i===0){
        flag =  1;
        break;
    }
}
if(a === 0 && a === 1){
    console.log(`${a} is not prime number`)
}
else if(flag === 0){
    console.log(`${a} is prime number`)
}
else{
     console.log(`${a} is not prime number`)
}