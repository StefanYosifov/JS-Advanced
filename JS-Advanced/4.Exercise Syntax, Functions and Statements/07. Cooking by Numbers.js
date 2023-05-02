function cook(startingNum,...operations){
    let number=Number(startingNum);
    for (const operation of operations) {
        switch(operation){
            case 'chop':
            number/=2;
        }
        switch(operation){
            case 'dice':
            number=Math.sqrt(number);
        }
        switch(operation){
            case 'spice':
            number+=1;
        }
        switch(operation){
            case 'bake':
            number*=3;
        }
        switch(operation){
            case 'fillet':
            number*=0.8;
        }
        console.log(number);
    }

}

cook(32, 'chop', 'chop', 'chop', 'chop', 'chop');