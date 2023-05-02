window.addEventListener("load", solve);

function solve() {
  let fieldElements=document.getElementsByTagName('fieldset')[0];
  let makeElement=fieldElements.children[2];
  let modelElement=fieldElements.children[4];
  let yearElement=fieldElements.children[6];
  let fuelElement=fieldElements.children[8];
  let originalCostElement=fieldElements.children[11];
  let sellingPriceElement=fieldElements.children[13];
  let publishButton=fieldElements.children[14];
  let tableBody=document.getElementById('table-body');
  let carListElement=document.getElementById('cars-list');
  let profitElement=document.getElementById('profit');

  publishButton.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let make=makeElement.value;
    let model=modelElement.value;
    let year=yearElement.value;
    let fuel=fuelElement.value;
    let originalCost=Number(originalCostElement.value);
    let sellingPrice=Number(sellingPriceElement.value);
    let validInput=validation(make,model,year,fuel,originalCost,sellingPrice);
    if(validInput===false){return};
    
    const newTableRow=createElements(make,model,year,fuel,originalCost,sellingPrice);
    const buttonCol=createButtons(`Edit`,`Sell`);
    newTableRow.appendChild(buttonCol);
    tableBody.appendChild(newTableRow);

    makeElement.value='';
    modelElement.value='';
    yearElement.value='';
    fuelElement.value='';
    originalCostElement.value='';
    sellingPriceElement.value='';

    let editButtonElement=newTableRow.lastChild.children[0];
    let sellButtonElement=newTableRow.lastChild.children[1];
    editButtonElement.addEventListener('click',(e)=>{
      debugger;
      let currentTableRow=e.target.parentElement.parentElement;   
      let arrColEl=[];
      for(let td of currentTableRow.children){
        arrColEl.push(td.textContent);
      }
      arrColEl.pop();
      

      [makeElement.value,modelElement.value,yearElement.value,fuelElement.value,originalCostElement.value,sellingPriceElement.value]=arrColEl;
      e.target.parentElement.parentElement.remove();
    })
     sellButtonElement.addEventListener('click',(e)=>{
      let currentTableRow=e.target.parentElement.parentElement;

      let arrColEl=[];
      for(let td of currentTableRow.children){
        arrColEl.push(td.textContent);
      }
      arrColEl.pop();

      let makeModelElement=arrColEl[0]+' '+arrColEl[1];
      let productionYearElement=arrColEl[2];
      let profitMadeElement=Number(arrColEl[5])-Number(arrColEl[4]);

      let soldCarList=createSellElements(makeModelElement,productionYearElement,profitMadeElement);
      carListElement.appendChild(soldCarList);

      let totalProfit=Number(document.getElementById('profit').textContent);
      profitElement.textContent=totalProfit+profitMadeElement;
      e.target.parentElement.parentElement.remove();
     })

  })

  function createSellElements(makeModel,productionYear,profit){
    let createList=document.createElement('li');
    let createMakeModelElemenet=document.createElement('span');
    let createProductionYearElemenet=document.createElement('span');
    let createProfitElemenet=document.createElement('span');
    
    createList.classList.add('each-list');
    createMakeModelElemenet.textContent=makeModel;
    createProductionYearElemenet.textContent=productionYear;
    createProfitElemenet.textContent=profit;

    createList.appendChild(createMakeModelElemenet);
    createList.appendChild(createProductionYearElemenet);
    createList.appendChild(createProfitElemenet);
    return createList;
  }


  function validation(make,model,year,fuel,cost,price){
    if(!make||!model||!year||!fuel||!cost||!price||cost>price){
      return false;
    }
    return true;
  }

  function createElements(make,model,year,fuel,price,newPrice){
    let createRowElement=document.createElement('tr');
    let createMakeElement=document.createElement('td');
    let createModelElement=document.createElement('td');
    let createYearElement=document.createElement('td');
    let createFuelElement=document.createElement('td');
    let createPriceElement=document.createElement('td');
    let createNewPriceElement=document.createElement('td');
   
    createRowElement.classList.add('row');
    createMakeElement.textContent=make;
    createModelElement.textContent=model;
    createYearElement.textContent=year;
    createFuelElement.textContent=fuel;
    createPriceElement.textContent=price;
    createNewPriceElement.textContent=newPrice;

    createRowElement.appendChild(createMakeElement);
    createRowElement.appendChild(createModelElement);
    createRowElement.appendChild(createYearElement);
    createRowElement.appendChild(createFuelElement);
    createRowElement.appendChild(createPriceElement);
    createRowElement.appendChild(createNewPriceElement);
    
    return createRowElement;
  }

  function createButtons(firstBtnName,secondBtnName){
    let createColElement=document.createElement('td');
    let createFirstBtn=document.createElement('button');
    let createSecondBtn=document.createElement('button');

    createFirstBtn.className=`action-btn edit`;
    createFirstBtn.textContent=firstBtnName;

    createSecondBtn.className=`action-btn sell`;
    createSecondBtn.textContent=secondBtnName;

    createColElement.appendChild(createFirstBtn);
    createColElement.appendChild(createSecondBtn);
    return createColElement;
  }

 

}

