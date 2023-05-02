class Movie{
    constructor (movieName, ticketPrice){
        this.movieName=movieName;
        this.ticketPrice=ticketPrice;
        this.screenings=[];
        this.profits=new Map();
        this.soldTickets=0;
    }

    newScreening(date, hall, description){

        if(this.screenings.some(x=>x.date===date && x.hall==hall)){
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }


        let screening={date,hall,description};
        this.screenings.push(screening);

        if(!this.profits.has(this.movieName)){
            this.profits.set(this.movieName,0);
        }
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets){
        const screening=this.screenings.find(x=>x.date===date&&x.hall===hall);
        if(!screening){
           throw new Error (`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        let profit=soldTickets*this.ticketPrice;
        let getMapValue=this.profits.get(this.movieName);
        this.profits.set(this.movieName,getMapValue+profit);
        this.soldTickets+=soldTickets;
        
        let index=this.screenings.indexOf(screening);
        this.screenings.splice(index,1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`
    }

    toString(){
       let result=`${this.movieName} full information:\n`;
        result+=`Total profit: ${this.profits.get(this.movieName)}$\nSold Tickets: ${this.soldTickets}\n`;
        if(this.screenings.length>0){
            result+='Remaining film screenings:\n'
            let sortedArr=this.screenings.sort((a,b)=>a.hall.localeCompare(b.hall))
            for(let sorted of sortedArr){
                result+=`${sorted.hall} - ${sorted.date} - ${sorted.description}\n`;
            }
        }
        else{
            result+="No more screenings!";
        }
        return result;
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
 console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`)); 
 console.log(m.newScreening('October 3, 2020', 'Main', `regular`)); 
 console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`)); 
 console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78)); 
console.log(m.toString());
m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`); 
m.newScreening('October 4, 2020', 'Main', `regular`); 
console.log(m.toString());
