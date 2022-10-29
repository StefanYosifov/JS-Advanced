window.addEventListener("load", solve);

function solve() {

  document.getElementById('publish-btn').addEventListener('click',createPost)
  let titleField=document.getElementById('post-title');
  let categoryField=document.getElementById('post-category');
  let contentField=document.getElementById('post-content');
 
  function createPost(){
    let titleValue=titleField.value;
    let categoryValue=categoryField.value;
    let contentValue=contentField.value;

    if(!titleValue || !categoryValue|| !contentValue){
      return;
    }
    console.log('Works');

  }

}
