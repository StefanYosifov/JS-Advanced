function solve() {
  
  let textAreaElement=document.getElementById('input').value;
  let output=document.getElementById('output');
  let arrText=textAreaElement.split('.').filter(x=>x.length>0);


  for(let i=0;i<arrText.length;i+=3){
    let result=[];
    for(let j=0;j<3;j++){
      if(arrText[j+i]){
        result.push(arrText[i+j]);
      }
    }

    let resultText=result.join('. ')+'.';
    output.innerHTML+=`<p>${resultText}</p>`;
  }

}