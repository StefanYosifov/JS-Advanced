function attachEvents() {
   const loadBtn=document.getElementById('btnLoad');
   const phoneBookData=document.getElementById('phonebook');
   const phoneBookURL='http://localhost:3030/jsonstore/phonebook';
   loadBtn.addEventListener('click',(e)=>loadPhoneBook(e,phoneBookData,phoneBookURL));
}




async function loadPhoneBook(e,element,phoneBookURL){
    const response=await fetch(phoneBookURL);
    const data=await response.json();
    generetePhonebookDOM(data,element);
}

function generetePhonebookDOM(data,element){
    for(const [key,value] of Object.entries(data)){
        const appendElement=createElement('li','',`${value.person} ${value.phone}`);
        const deleteBtn=createElement('button','','Delete');
        appendElement.appendChild(deleteBtn);
        element.appendChild(appendElement);

        deleteBtn.addEventListener('click',(e)=>DeletePhonebook(e));
    }
}

async function DeletePhonebook(e){
    const phoneBookURL='http://localhost:3030/jsonstore/phonebook';
    const response=await fetch(phoneBookURL);
    const data=await response.json();
    console.log(data);
    let findKey=Array.from(data).filter(x=>x.person===e.target.parentElement.textContent.split(' ')[0]);
    console.log(findKey);
    const deleteURL=`http://localhost:3030/jsonstore/phonebook/`;
}

function createElement(name,className,textContent){
    const element=document.createElement(name);
    if(className){
        element.classList.add(className);
    }
    if(textContent){
        element.textContent=textContent;
    }
    return element;
}

attachEvents();