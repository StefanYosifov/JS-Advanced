function solve() {

    const infoStatus=document.getElementById('info').children[0];
    const departBtn=document.getElementById('depart');
    const arriveBtn=document.getElementById('arrive');

    let stop={next:'depot'};

    async function depart() {
        
        try {
            departBtn.disabled=true;
            const url=`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
            const response=await fetch(url);
            stop=await response.json();
            
            infoStatus.textContent=`Next stop ${stop.name}`;
            arriveBtn.disabled=false;

        } catch (error) {
            
        }


    }

    function arrive() {
        infoStatus.textContent=`Next stop ${stop.name}`;
        arriveBtn.disabled=true;


        departBtn.disabled=false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();