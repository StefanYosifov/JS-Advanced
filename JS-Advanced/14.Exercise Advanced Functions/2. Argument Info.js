function arguments(...input){

    let result={};

   for(let el of input){

    let argumentType=typeof(el);
    console.log(`${argumentType}: ${el}`);

    if(result.hasOwnProperty(argumentType)){
        result[argumentType]=0;
    }
    result[argumentType]+=1;
    
   }
    
   let buff="";
   for(let [key,value] of Object.entries(result)){
        buff+=`${key} ${value}\n`;
   }
   console.log(buff);
    
   

}

arguments({name: 'bob'},3.333,9.999)