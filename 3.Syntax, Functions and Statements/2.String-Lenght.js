function solve(first,second,third){
    let firstLenght=first.length;
    let secondLenght=second.length;
    let thirdLenght=third.length;



    let sum=firstLenght+secondLenght+thirdLenght;
    let result=Math.round(sum/3);

    console.log(sum);
    console.log(result);
}

solve('chocolate','ice cream','cake');