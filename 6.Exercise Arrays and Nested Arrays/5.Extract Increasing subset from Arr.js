function subset(arr){
    let result=[];
    let biggestNumber=arr.shift();
    result.push(biggestNumber);

    for (element of arr) {
       if(element>=biggestNumber){
        result.push(element);
        biggestNumber=element;
       }
    }
    return result;
}

subset([1,3,8,4,10,12,16,24,5]);
subset([20,3,2,15,20]);