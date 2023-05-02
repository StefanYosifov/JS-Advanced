function calorieObject(arr){

    let object={};

    for(let i=0;i<arr.length;i+=2){
        let foodName=arr[i];
        let foodCalories=Number(arr[i+1]);
        object[foodName]=foodCalories;
    }

    console.log(object);

}

calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52']);