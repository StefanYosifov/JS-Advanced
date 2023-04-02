function extractText () {
    
    let textBox=document.getElementById('result');
    let ElementsToAdd=document.getElementsByTagName('ul');

    for(let child of ElementsToAdd){
        textBox.textContent=child.textContent;
    }
}

