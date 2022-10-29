function Juices(input) {
  let fruits = new Map();

  for (let el of input) {
    let splitInput = String(el).split(" => ");
    let fruitName = splitInput[0];
    let fruitQuanity = Number(splitInput[1]);

    if (!fruits.has(fruitName)) {
      fruits.set(fruitName, { fruitQuanity: 0, fruitBottles: 0 });
    }

    fruits.get(fruitName).fruitQuanity += fruitQuanity;
    let produceBottles = fruits.get(fruitName).fruitQuanity / 1000;
    if (produceBottles >= 1) {
      fruits.get(fruitName).fruitBottles += Math.floor(produceBottles);
      while (fruits.get(fruitName).fruitQuanity >= 1000) {
        fruits.get(fruitName).fruitQuanity -= 1000;
      }
    }
   
  }

  for (let [k, v] of fruits) {
    if (v.fruitBottles > 0) {
      console.log(`${k} => ${v.fruitBottles}`);
    }
  }
}

Juices([
  "Kiwi => 234",

  "Pear => 2345",

  "Watermelon => 3456",

  "Kiwi => 4567",

  "Pear => 5678",

  "Watermelon => 6789",
]);
