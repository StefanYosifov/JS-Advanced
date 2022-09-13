function solve(firstNum,secondNum,thirdNum){
    let arrNum=[firstNum,secondNum,thirdNum].sort(function(a,b){return b-a});
    let largestNumber=arrNum[0];
    console.log(`The largest number is ${largestNumber}.`);
}


solve(5,-3,16);