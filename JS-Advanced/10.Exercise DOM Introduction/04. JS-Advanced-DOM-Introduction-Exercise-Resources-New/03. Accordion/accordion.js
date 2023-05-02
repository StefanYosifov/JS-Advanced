

function toggle() {

    const htmlElements={
       button:document.getElementsByClassName('button')[0],
       text:document.getElementById('extra')
    }

    if(htmlElements.text.style.display!='block'){
        htmlElements.button.textContent='Less';
        htmlElements.text.style.display='block';
    }
    else{
        htmlElements.button.textContent='More';
        htmlElements.text.style.display='none';
    }
}