let a = 121
let temp = a.toString().split('').reverse().join('');
let rev = Number(temp)
if ( a === rev ){
    console.log("Palindrome number")
}
else{
    console.log("Not palindrome number")
}
