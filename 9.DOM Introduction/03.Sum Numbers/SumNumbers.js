function calc() {
    
    let firstElement=document.getElementById('num1').value;
    let secondElement=document.getElementById('num2').value;
    let sum=Number(firstElement)+ Number(secondElement);


    let sumElement=document.getElementById('sum');
    sumElement.value=sum;
}
