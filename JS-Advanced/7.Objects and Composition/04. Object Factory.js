function cityTaxes(name,population,treasury){

    return{
        name:name,
        population:population,
        treasury:treasury,
        taxRate:10,

        collectTaxes(){
            return this.treasury+=this.population*this.taxRate;
        },
        applyGrowth(percentage){
            return this.population*=Number(percentage/100 + 1)
        },
        applyRecession(percentage){
            return this.treasury*=Number(1-(percentage/100));
        }
    }
}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);
