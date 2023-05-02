function sortNames(arr){
    arr = arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((x, i) => console.log(`${i+1}.${x}`));
}

sortNames(["John","Bob","Christina","Ema",'Angel']);