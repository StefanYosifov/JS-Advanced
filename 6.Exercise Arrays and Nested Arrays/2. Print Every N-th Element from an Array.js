function printNthElement(arr,n){
   let resultArr=[];
   for(let i=0;i<arr.length;i++){
    if(i%n==0){
        resultArr.push(arr[i]);
    }
   }
   return resultArr;
}

printNthElement(['5','20','31','4','20'],2);