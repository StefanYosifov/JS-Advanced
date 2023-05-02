import { nav } from "./router.js";




nav();

function hideAll(){
    const mainPageView=document.querySelectorAll('.view-section');
    mainPageView.forEach(x=>x.style.display='none');
    document.getElementsByTagName('footer')[0].style.display='none';
}

export function showView(section){
    hideAll();
    section.style.display='block';
}