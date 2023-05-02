function townPopulation(arr){

    let towns={};
    for (let currentTown of arr) {
        let[townName,townPopulation]=currentTown.split(' <-> ');
        townPopulation=Number(townPopulation);

        if(towns[townName]==undefined){
            towns[townName]=townPopulation;
        }
        else{
            towns[townName]+=townPopulation;
        }
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }

}


townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Sofia <-> 1']);