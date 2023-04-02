function sumTable() {

    const tableElements=Array.from(document.getElementsByTagName('td'));

    let sum= tableElements.slice(0,tableElements.length-2)
            .filter((value,index)=>(index%2==1))
            .reduce((accumulator, currentValue) => accumulator + Number(currentValue.textContent),0)
    
            document.getElementsByTagName('td')
            [document.getElementsByTagName('td').length-1].textContent=sum;
}