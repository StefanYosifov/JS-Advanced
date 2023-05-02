function fibonacci(){

    let firstNum=0;
    let secondNum=1;

    return function(){
        let sum=firstNum+secondNum;
        firstNum=secondNum;
        secondNum=sum;
        return firstNum;
    }
   
}


let fib=fibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
