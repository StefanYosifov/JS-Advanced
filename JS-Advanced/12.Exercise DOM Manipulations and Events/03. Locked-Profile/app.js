function lockedProfile() {
    

    let showMoreElement=Array.from(document.getElementsByTagName('button'));
    showMoreElement.forEach(btn=>btn.addEventListener('click',showProfile));



    function showProfile(e){

        const button=e.target;   
        const profile=button.parentNode;
        const moreInformationDiv=profile.getElementsByTagName('div')[0];
        const lockUnlockElement=profile.querySelector('input[type=radio][value=lock]:checked');
        const lockStatus=Boolean(lockUnlockElement);


        if(lockStatus===true){
           
        }
        else{
            
            if(button.textContent==="Show more"){
                moreInformationDiv.style.display="block";
                button.textContent="Hide it";
            }
            else{
                if(button.textContent==="Hide it"){
                    moreInformationDiv.style.display="none";
                    button.textContent='Show more';
                }
            }

        }
       
    }

}