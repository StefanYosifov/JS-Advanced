function evenElements(arr){
    const filtedArray=[...arr].filter((value,index)=>index%2==0);
    console.log(filtedArray);
}

evenElements(['20', '30', '40','50', '60']);