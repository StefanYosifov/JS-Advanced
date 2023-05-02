function previousDay(year, month, day) {
    let previous = new Date (year, month,day-1);
    if (day == 1){
        previous = new Date (year, month -1, day-1)
        console.log(`${previous.getFullYear()}-${previous.getMonth()+1}-${previous.getDate()}`);
    }else{
    console.log(`${previous.getFullYear()}-${previous.getMonth()}-${previous.getDate()}`);
    }}


previousDay(2016,12,1);