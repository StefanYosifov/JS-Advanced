async function getInfo() {
    const busID=document.getElementById('stopId').value;
    const url=`http://localhost:3030/jsonstore/bus/businfo/${busID}`;

    try{
    document.getElementById(`buses`).replaceChildren();
    const response=await fetch(url);
    if(response.status!==200){
        throw new Error('ID not found!');
    }

    const data= await response.json();
     document.getElementById(`stopName`).textContent=data.name;
    Object.entries(data.buses).forEach(x=>{
        const li=createElement('li',`Bus ${x[0]} arrives in ${x[1]} minutes`);
        document.getElementById(`buses`).appendChild(li);
       
    });

    
    }catch{

    }
   

  
}

function createElement(type,name){
    let element=document.createElement(type);
    element.textContent=name;
    return element;
}