const { assert, expect } = require('chai');
const { chooseYourCar } = require('./chooseYourCar');


 
    describe("TODO …", function() {
        it("Choosing Type throwing invalid year", function() {
            expect(()=>chooseYourCar.choosingType(`Sedan`,`Red`,2023)).to.throw(`Invalid Year!`);
            expect(()=>chooseYourCar.choosingType(`Sedan`,`Red`,1899)).to.throw(`Invalid Year!`);
            expect(()=>chooseYourCar.choosingType(`NotSedan`,`Red`,2015)).to.throw(`This type of car is not what you are looking for.`);
        });
        it(`Choosing Type throwing invalid requirements`,function(){
            let year=2020;
            let type='Sedan';
            let color='Red';
            expect(chooseYourCar.choosingType(type,color,year)).to.be.equal(`This ${color} ${type} meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType(type,color,2010)).to.be.equal(`This ${color} ${type} meets the requirements, that you have.`);

            year=2009;
            expect(chooseYourCar.choosingType(type,color,year)).to.be.equal(`This ${type} is too old for you, especially with that ${color} color.`);

        });

        it(`Brand name exception`,function(){
            expect(()=>chooseYourCar.brandName({},0)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(['Yaguar'],'ASDDDSASAD')).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(['Yaguar'],-1)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(['Yaguar'],1)).to.throw("Invalid Information!");

            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],0)).to.be.equal(`Toyota, Peugeot`);

        });
        it(`Fuel Consumption`,function(){
            expect(()=>chooseYourCar.carFuelConsumption(`Asd`,10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10,`Asd`)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(-1,10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10,-1)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(1,0)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(1,0)).to.throw("Invalid Information!");
        });
        it(`Fuel consumpion logic`,function(){
           expect(chooseYourCar.carFuelConsumption(10,15)).to.be.equal(`The car burns too much fuel - 150.00 liters!`);
           expect(chooseYourCar.carFuelConsumption(200,5)).to.be.equal(`The car is efficient enough, it burns 2.50 liters/100 km.`);
           expect(chooseYourCar.carFuelConsumption(100,7)).to.be.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
            
        });
     });
  
