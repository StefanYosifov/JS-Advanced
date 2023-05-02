function solve(radius){
    let userInputType=typeof(radius);
    if(userInputType==='number'){
        let result=Math.PI*radius*radius;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${userInputType}.`);
    }
}


solve(5);