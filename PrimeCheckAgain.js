
// Problem is to check the number is Prime or not but the condition is not to use the BRUTE FORCE
// you have to make the code optimum so that it can take less time and space 


function checkPrime(num) {

    if(num <= 1) {
        return false;
    }
    for(let i = 2; i<=(num**0.5); i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}
let num = 11;

if(checkPrime(num)){
    console.log("It is a Prime number");
}else {
    console.log("Not a Prime number");
}