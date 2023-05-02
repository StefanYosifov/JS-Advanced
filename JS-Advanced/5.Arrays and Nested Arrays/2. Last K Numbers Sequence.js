function KNumbers(lengthOfArr, sumOfSequence) {
	let arr = [1, 1, 2];

	for(let i=2;i<lengthOfArr-1;i++){
        let sum=0;
        for(let j=0;j<sumOfSequence;j++){
            sum+=arr[i-j];
        }
        arr.push(sum);
    }
    console.log(arr);

}

KNumbers(6,3);
KNumbers(8, 2);