function search() {
   
   let townElements=Array.from(document.querySelectorAll('ul li'));
   let searchTextElement=document.getElementById('searchText').value;
   let count=0;

   for(let item of townElements){
      let text=item.textContent;


      if(text.includes(searchTextElement)){
         item.style.textDecoration="underline";
         item.style.fontWeight="bold";
         count++;
      }
      else{
         item.style.textDecoration="none";
         item.style.fontWeight="normal";
      }
   }

   document.getElementById('result').innerText=`${count} matches found`;
}
