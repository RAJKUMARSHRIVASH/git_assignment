
// Problem is to check the number is Prime or not but the condition is not to use the BRUTE FORCE
// you have to make the code optimum so that it can take less time and space 




function checkPrime(num) {

    if(num <= 1 || num == undefined) {
        return false;
    }
    for(let i = 2; i<=num**0.5; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

// here to get the multiple numbers to check we can use loop here

for(let i = 1; i<=20; i++){

    if(checkPrime(i)){
        console.log(i,"is a Prime number");
    }else {
        console.log(i,"Not a Prime number");
    }
}
