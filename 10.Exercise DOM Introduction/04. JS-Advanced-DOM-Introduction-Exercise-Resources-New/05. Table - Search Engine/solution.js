function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let tableElement=document.querySelectorAll('tbody > tr');
      let searchElement=document.getElementById('searchField').value;

      for(let i=0;i<tableElement.length;i++){
         if(tableElement[i].innerText.includes(searchElement)){
            tableElement[i].className='select';
         }
         else{
            tableElement[i].className='';
         }
         
      }
        
         
      }

   }
