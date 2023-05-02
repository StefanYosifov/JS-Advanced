function solve(first,second){
    let firstNum=Number(first);
    let secondNum=Number(second);
    let total=0;
    for(let i=firstNum;i<=secondNum;i++){
        total+=i;
    }
    console.log(total);
}

solve(1,5);