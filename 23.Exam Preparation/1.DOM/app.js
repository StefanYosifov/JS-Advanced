window.addEventListener('load', solve);

function solve() {
   let modelElement=document.getElementById('model');
   let yearElement=document.getElementById('year');
   let descriptionElement=document.getElementById('description');
   let priceElement=document.getElementById('price');

   document.getElementById('add').addEventListener('click',AddToTable);

   function AddToTable(e){
    e.preventDefault();
 
    let modelValue=modelElement.value;
    let yearValue=yearElement.value;
    let descriptionValue=descriptionElement.value;
    let priceValue=Number(priceElement.value);
    
    createElement(modelValue,yearValue,descriptionValue,priceValue);

    modelElement.value='';
    yearElement.value='';
    descriptionElement.value='';
    priceElement.value='';

    let MoreInfoBtnElement=document.getElementsByClassName('moreBtn')[0];
    let BuyBtnElement=document.getElementsByClassName('buyBtn')[0];
 
    MoreInfoBtnElement.addEventListener('click',ShoHideInformation);
    BuyBtnElement.addEventListener('click',BuyFurniture);
   }

   function createElement(model,year,description,price){
        let firstRow=document.createElement('tr');
        let createModel=document.createElement('td');
        createModel.textContent=model;

        let createPrice=document.createElement('td');
        createPrice.textContent=price.toFixed(2);

        let createButtons=document.createElement('td');
        let firstButton=document.createElement('button');
        let secondButton=document.createElement('button');
        firstButton.textContent='More info';
        secondButton.textContent='Buy it';
        firstButton.classList.add('moreBtn');
        secondButton.classList.add('buyBtn');
        createButtons.appendChild(firstButton);
        createButtons.appendChild(secondButton);


        firstRow.appendChild(createModel);
        firstRow.appendChild(createPrice);
        firstRow.appendChild(createButtons);

        let secondRow=document.createElement('tr');
        secondRow.classList.add('hide');

        let createYear=document.createElement('td');
        createYear.textContent=year;

        let createDescription=document.createElement('td');
        createDescription.setAttribute('colspan',3);
        createDescription.textContent=description;

        secondRow.appendChild(createYear);
        secondRow.appendChild(createDescription);

        document.getElementById('furniture-list').appendChild(firstRow);
        document.getElementById('furniture-list').appendChild(secondRow);
   }



   function ShoHideInformation(e){
    let button=e.target;
    let buttonText=button.textContent;
    let hiddenRow=document.getElementsByClassName('hide')[0];
    if(button.textContent==='More info'){
        button.textContent='Less info';
        hiddenRow.style.display='contents';
    }
    else if(button.textContent==='Less info'){
        button.textContent='More info';
        hiddenRow.style.display='none';
    }
   }

   function BuyFurniture(e){
    debugger;
   }

}
