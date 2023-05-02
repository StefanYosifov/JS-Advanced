function solve(arr){

}



let arr=[1,2,3,4];
let secondArr=arr.slice(); // copies the other array
let thirdArr=arr.slice(2); // copies from third element onwards;
let fourthArr=arr.splice(2);// copies from third element onwards, but changes the first


console.log(arr);
console.log(thirdArr);



let arrDemo=[1];
arrDemo.fill(5,0,3);
console.log(arrDemo);


let names=['Gosho','Maria','Angel'];
console.log(names.sort());


let numbers=[10,15,1,4,99,125];
numbers.sort((a,b)=> a-b);
console.log(numbers);

