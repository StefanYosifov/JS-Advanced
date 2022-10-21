function cataloge(input){


    let catalogue={};
    for(let currProduct in input){
        let[product,productPrice]=input[currProduct].split(' : ');
        if(catalogue[product[0]]==undefined){
            catalogue[product[0]]={};
        }
        catalogue[product[0]][product]=[Number(productPrice)];
    }

   


    let sortedCatalogue=Object.entries(catalogue).sort((a,b)=>a[0].localeCompare(b[0]));
    console.table(sortedCatalogue);

   for(let [key,value] of Object.entries(sortedCatalogue)){
    for(let [product,price] of Object.entries(value)){
        console.log(`${product} ${price}`);
    }
   }

  
    

}
   



cataloge(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);