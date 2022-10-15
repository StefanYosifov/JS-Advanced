function solve() {
 

  let textElement=document.getElementById('text').value;
  let conventionElement=document.getElementById('naming-convention').value;

  let textArr=textElement.split(' ');
  let result="";
  switch(conventionElement){
    case "Camel Case":
    for(let i=0;i<textArr.length;i++){
      if(i===0){
        result+=textArr[i].substring(0,1).toLowerCase();
        result+=textArr[i].substring(1).toLowerCase();
      }
      else{
        let letter=textArr[i];
        let capitalLetter=letter[0].toUpperCase();
        result+=capitalLetter;
        result+=textArr[i].substring(1).toLowerCase();
      }
    }
    break;
    case "Pascal Case":
      for(let i=0;i<textArr.length;i++){
        if(i===0){
          result+=textArr[i].substring(0,1).toUpperCase();
          result+=textArr[i].substring(1).toLowerCase();
        }
        else{
          let letter=textArr[i];
          let capitalLetter=letter[0].toUpperCase();
          result+=capitalLetter;
          result+=textArr[i].substring(1).toLowerCase();
        }
      }
      break;
      default:
        result='Error!';
      }
      
      document.getElementById('result').textContent=result;

}