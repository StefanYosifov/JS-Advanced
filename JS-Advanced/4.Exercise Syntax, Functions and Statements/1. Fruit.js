function fruit(fruit,grams,pricePerKG){
    let gramsToKG=grams/1000;
    let price=gramsToKG*pricePerKG;
    console.log(`I need $${price.toFixed(2)} to buy ${gramsToKG.toFixed(2)} kilograms ${fruit}.`)
}


fruit('apple', 1563, 2.35);