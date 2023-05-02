function speedLimit(speed,area){
    let cityArr=[
        ['city',50],
        ['motorway',130],
        ['interstate',90],
        ['residential',20],
    ]

        for(let i=0;i<cityArr.length;i++){

                let key=cityArr[i][0];
                let value=cityArr[i][1];

                if(key===area){
                    let overTheLimit=speed-value;
                   
                    if(value>=speed){
                        console.log(`Driving ${speed} km/h in a ${value} zone`);
                    }
                    else if(overTheLimit<=20){
                        console.log(`The speed is ${Math.abs(overTheLimit)} km/h faster than the allowed speed of ${value} - speeding`);
                    }
                    else if(overTheLimit<=40){
                        console.log(`The speed is ${Math.abs(overTheLimit)} km/h faster than the allowed speed of ${value} - excessive speeding`);
                    }
                    else{
                        console.log(`The speed is ${Math.abs(overTheLimit)} km/h faster than the allowed speed of ${value} - reckless driving`);
                    }
                }
            
        }
    }

speedLimit(21,'residential');
speedLimit(120, 'interstate');
speedLimit(200, 'motorway');