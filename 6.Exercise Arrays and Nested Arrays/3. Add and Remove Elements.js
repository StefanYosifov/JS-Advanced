function addRemove(commandsArr){
    let arr=[];
    let number=1;
    for (const command of commandsArr) {
        if(command==="add"){
            arr.push(number)
        }
        else if(command==="remove"){
            arr.pop();
        }
        number++;
    }
    if(arr.length==0){
        console.log('Empty');
    }
    else{
    console.log(arr.join('\n'));
    }
}

addRemove(['add','add','add','add']);
addRemove(['Remove']);