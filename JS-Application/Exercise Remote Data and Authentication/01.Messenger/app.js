function attachEvents() {
    
    const sendBtn=document.getElementById('submit');
    const refreshBtn=document.getElementById('refresh');
    sendBtn.addEventListener('click',submitMessage);
    refreshBtn.addEventListener('click',loadMessages);
}


async function submitMessage(e){
   const author=document.querySelector('[type=text]').value;
   const content=document.querySelectorAll(('[type=text]'))[1].value;

   const response=fetch('http://localhost:3030/jsonstore/messenger',{
    method:'post',
    headers:{
        'Content-Type':'application:json'
    },
    body:JSON.stringify({author,content}) 
   });
   const data=await response;
   console.log(JSON.stringify({author,content}));
}

async function loadMessages(e){
    const response=await fetch('http://localhost:3030/jsonstore/messenger');
    const data=await response.json();
    console.log(data);
    displayMessages(data);
}

function displayMessages(data){
    const dataArr=[data];
    const textareaElement=document.getElementById('messages'); // Can be moved outside
    textareaElement.textContent='';
    for(let el of Object.values(...dataArr)){
        textareaElement.textContent+=`${el.author}: ${el.content}\n`;
    }
}

attachEvents();