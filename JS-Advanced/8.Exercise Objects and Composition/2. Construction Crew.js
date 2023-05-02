function crew(object){

    let modifiedWorker=Object.assign({},object);
    if(modifiedWorker.dizziness==false){
        return modifiedWorker;
    }

    let requiredAmountToWork=0.1*modifiedWorker.weight*modifiedWorker.experience;
    modifiedWorker.levelOfHydrated+=requiredAmountToWork;
    modifiedWorker.dizziness=false;
    console.log(modifiedWorker);
   
}


crew({
    weight:80,
    experience:1,
    levelOfHydrated:0,
    dizziness:true
});

crew({ weight: 120,

    experience: 20,
    
    levelOfHydrated: 200,
    
    dizziness: true });