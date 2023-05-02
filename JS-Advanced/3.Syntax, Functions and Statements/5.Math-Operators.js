function solve(firstNum,secondNum,operator){
    if(operator=='+'){
        console.log(firstNum+secondNum);
    } else if(operator=='-'){
        console.log(firstNum-secondNum);
    } else if(operator=='*'){
        console.log(firstNum*secondNum);
    } else if(operator=='/'){
        console.log(firstNum/secondNum);
    } else if(operator=='%'){
        console.log(firstNum%secondNum);
    } else if(operator=='**'){
        console.log(firstNum**secondNum);
    }
}

solve(5,10,'+');