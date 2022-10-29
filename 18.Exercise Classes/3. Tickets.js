function Tickets(arr,typeOfSort){
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }

    let resultArr=[];
    for(let el of arr){
        let splitElements=el.split('|');
        let ticket=new Ticket(splitElements[0],splitElements[1],splitElements[2]);
        resultArr.push(ticket);
    }
    
    if(typeOfSort=="destination"){
        resultArr.sort((a,b)=>a.destination.localeCompare(b.destination));
    }
    else if(typeOfSort==="price"){
        resultArr.sort((a,b)=>a.price-b.price);
    }
    else{
        resultArr.sort((a,b)=>a.status.localeCompare(b.status));
    }

    return resultArr;
   
}

console.log(Tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed']),'destination');