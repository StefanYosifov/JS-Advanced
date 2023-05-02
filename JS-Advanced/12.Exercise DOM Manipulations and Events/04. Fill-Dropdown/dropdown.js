function addItem() {
    

    textToAdd=document.getElementById('newItemText').value;
    valueToAdd=Number(document.getElementById('newItemValue').value);

    const menuElement=document.getElementById('menu');
    const appendToMenu=document.createElement('option');
    appendToMenu.value=textToAdd;
    appendToMenu.textContent=valueToAdd;
    menuElement.appendChild(appendToMenu);

   document.getElementById('newItemValue').value='';
   document.getElementById('newItemText').value='';

}