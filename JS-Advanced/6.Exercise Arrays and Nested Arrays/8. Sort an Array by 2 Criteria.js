function twoCriteriaSort(arr){
   
    arr.sort((a,b)=>{
        if(a.length!==b.length){
            return a.length-b.length;
        }
        else{
            return a.localeCompare(b);
        }
    })
    return arr.join('\n');
}

twoCriteriaSort(['Johnn','Angel','GOOOOOSHO']);