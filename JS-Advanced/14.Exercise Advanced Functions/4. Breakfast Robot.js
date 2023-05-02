function solution() {
  let store = {
    protein: 0,
    carbohydrate: 0,
    flavours: 0,
    fat:0,
  };

  let recipesEnum={
    apple:{carbohydrate:1, flavour:2},
    burger:{carbohydrate:5,fat:7,flavour:3},
    lemonade:{carbohydrate:10,flavour:20},
    eggs:{protein:5,fat:1,flavour:1},
    turkey:{protein:10,carbohydrate:10,fat:10,flavour:10},
  }

  return function inputHandler(input){
        let token=input.split(' ');
        let[command,element,quantity]=input.split(' ');

        if(command===''){

        }else if(command===''){

        }
        else if(command===''){
            
        }

  }

}
