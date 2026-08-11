let Num = 12345
let temp = Num 
let ld 
let rev = 0
while (Num > 0){
    ld = Num  % 10
    rev = rev * 10 + ld
    Num = Math.floor(Num/10) 
}
console.log(rev);
