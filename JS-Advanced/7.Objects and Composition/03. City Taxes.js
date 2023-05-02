function cities(name,population,treasury){
    return{
        name,population,treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury+=this.population*this.taxRate;
        },
        applyGrowth(percentage){
            let percent=percentage/100+1;
            this.population*=percent;
        },
        applyRecession(percentage){
            let percent=percentage/100-1;
            this.treasury*=percent;
        },

    }; 
}
let city =cities('Tortuga',7000,15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
city.applyGrowth(1);
console.log(city.population);
console.log(city);


