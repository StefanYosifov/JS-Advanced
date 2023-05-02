function sameNumbers(number){
    let numAsString=number.toString();
    let sameDigits=false;
    let sumOfDigits=0;
    for(let i=0;i<numAsString.length-1;i++){
        if(numAsString[i]==numAsString[i+1]){
           sameDigits=true;
        }
        sumOfDigits+=Number(numAsString[i]);
    }
    sumOfDigits+=Number(numAsString[numAsString.length-1]);
    console.log(sameDigits);
    console.log(sumOfDigits);
}

sameNumbers(1);