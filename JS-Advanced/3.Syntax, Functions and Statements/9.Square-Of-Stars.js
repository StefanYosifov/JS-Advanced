function solve(starCount=5){

    let print='';

    for(let i=0;i<starCount;i++){

        for(let j=0;j<starCount;j++){
            print+='* ';
        }
        console.log(print);
        print='';
    }

}

solve(3);