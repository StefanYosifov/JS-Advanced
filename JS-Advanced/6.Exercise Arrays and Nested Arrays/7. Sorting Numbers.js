function sort(arr){

    arr.sort((a,b)=>a-b);
    let resultArr=[];
    while(arr.length>0){
        let firstElement=arr.shift();
        let lastElement=arr.pop();
        resultArr.push(firstElement);
        resultArr.push(lastElement);
        
    }
    return resultArr;
}


sort([1,5,3,100,6,15]);
sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);