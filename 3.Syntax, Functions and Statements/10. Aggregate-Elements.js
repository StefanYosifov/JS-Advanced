function solve(elements){
   
    aggregate(elements,0,(a,b)=>a+b);
    aggregate(elements,0,(a,b)=>a+1/b);
    aggregate(elements,'',(a,b)=>a+b);

    function aggregate(arr,inItVal,func){
        let val=inItVal;
        for(let i=0;i<arr.lenghth;i++)
            val=func(val,arr[i]);
        
        console.log(val);
    }
}


solve(2,4,8,16);