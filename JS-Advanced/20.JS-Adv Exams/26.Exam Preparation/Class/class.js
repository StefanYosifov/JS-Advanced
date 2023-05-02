class Parking{
    constructor(capacity,vehicles){
        this.capacity=Number(capacity);
        this.vehicles=Array(vehicles);
    }

    addCar( carModel, carNumber ){

        //////////////

        const car={carModel,carNumber,payed:false};
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber){
        let car=this.vehicles.find(x=>x.carNumber===carNumber);
        if(!car){
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if(car.payed===false){
           throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        let indexOfCar=this.vehicles.indexOf(car);
        if(indexOfCar!==-1){
            this.vehicles.splice(indexOfCar,1);
        }

        return `${carNumber} left the parking lot.`;
    }

    pay( carNumber ){
        let car=this.vehicles.find(x=>x.carNumber===carNumber);
        if(!car){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if(car.payed===true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed=true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber){
        
    }
}