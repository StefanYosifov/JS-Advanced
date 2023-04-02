function subset(arr) {
    return arr.reduce((acc, value) => {
        if (value >= (acc[acc.length - 1]|| arr[0])) {
            acc.push(value);
        }
        return acc
    },[])
}

console.log(subset([1,3,8,4,10,12,16,24,5]));