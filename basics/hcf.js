let a = 12;
let b = 18;
let i = 1
let ans ; 
while (i <= a) {
    if( a % i === 0 && b % i === 0){
        ans = i;
    }
    i++;
}
console.log(ans)