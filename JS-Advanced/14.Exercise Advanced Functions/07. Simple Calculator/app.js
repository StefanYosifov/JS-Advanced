function calculator() {
    

    return{
        init:(selector1,selector2,resultSelector)=>{
            selector1=document.querySelector('num1');
            selector2=document.querySelector('num2');
            resultSelector=document.querySelector('result');
        },
        add:()=>{
            let firstNum=Number(document.getElementById(selector1.value));
            let secondNum=Number(document.getElementById(selector2.value));
            let result=firstNum+secondNum;
            resultSelector.value=result;
        },
        subtract:()=>{
            let firstNum=Number(document.getElementById(selector1.value));
            let secondNum=Number(document.getElementById(selector2.value));
            let result=firstNum-secondNum;
            resultSelector.value=result;
        }
    }


}


const calculate=calculator();
calculate.init()



