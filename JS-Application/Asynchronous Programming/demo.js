function start(){
    console.log(`before promise`);
    const promise=new Promise(executor);
    promise.then(onSuccess);
    promise.catch(onFailure);
    console.log(`After promise`);
}


function executor(resolve,reject){
    setTimeout(reject,2000,'Rejected');
}

function onSuccess(result){
    console.log(result);
}
function onFailure(error){
    console.info('Encounter error'+' '+error);
}


start();