window.addEventListener("load", solve);

function solve() {
  

  let formArrayElements=document.getElementsByClassName(`inner-wrap`)[0];
  let firstNameElement=document.getElementsByClassName(`inner-wrap`)[0].children[0].children[0];
  let lastNameElement=document.getElementsByClassName(`inner-wrap`)[0].children[1].children[0];
  let ageElement=document.getElementsByClassName(`inner-wrap`)[0].children[2].children[0];
  let storyTitleElement=document.getElementsByClassName(`inner-wrap`)[0].children[3].children[0];
  let genreElement=document.getElementsByClassName(`inner-wrap`)[0].children[4].children[0];
  let myStoryElement=document.getElementsByClassName(`inner-wrap`)[1].children[1];
  let publishElement=document.getElementsByClassName(`button-section`)[0].children[0];
  let mainElement=document.getElementById(`main`);

  let previewListElement=document.getElementById(`preview-list`);

  publishElement.addEventListener('click',(e)=>{
    let firstName=firstNameElement.value;
    let lastName=lastNameElement.value;
    let age=ageElement.value;
    let storyTitle=storyTitleElement.value;
    let genre=genreElement.value;
    let story=myStoryElement.value;

    if(firstName==``||lastName==``||age==``||storyTitle==''||genre==''||story==''){
      return;
    }
    
    firstNameElement.value=``;
    lastNameElement.value=``;
    ageElement.value=``;
    storyTitleElement.value=``;
    genreElement.value=``;
    myStoryElement.value=``;
    e.target.disabled=true;

    let createList=document.createElement(`li`);
    createList.classList.add(`story-info`);
    let createArticle=document.createElement(`article`);
    let articleH4=document.createElement(`h4`);
    let articlePAge=document.createElement(`p`);
    let articlePTitle=document.createElement(`p`);
    let articlePGenre=document.createElement(`p`);
    let articlePStory=document.createElement(`p`);

    articleH4.textContent=`Name: ${firstName} ${lastName}`;
    articlePAge.textContent=`Age: ${age}`;
    articlePTitle.textContent=`Title: ${storyTitle}`;
    articlePGenre.textContent=`Genre: ${genre}`;
    articlePStory.textContent=`${story}`;

    let btnSaveStory=document.createElement(`button`);
    let btnEdit=document.createElement(`button`);
    let btnDelete=document.createElement(`button`);

    btnSaveStory.classList.add(`save-btn`);
    btnEdit.classList.add(`edit-btn`);
    btnDelete.classList.add(`delete-btn`);
    
    btnSaveStory.textContent=`Save Story`;
    btnEdit.textContent=`Edit Story`;
    btnDelete.textContent=`Delete Story`;

    createArticle.appendChild(articleH4);
    createArticle.appendChild(articlePAge);
    createArticle.appendChild(articlePTitle);
    createArticle.appendChild(articlePGenre);
    createArticle.appendChild(articlePStory);

    createList.appendChild(createArticle);
    createList.appendChild(btnSaveStory);
    createList.appendChild(btnEdit);
    createList.appendChild(btnDelete);

    previewListElement.appendChild(createList);

    btnSaveStory.addEventListener('click',(e)=>{ //
      mainElement.textContent=``;
      let end=document.createElement(`h1`);
      end.textContent=`Your scary story is saved!`;
      mainElement.appendChild(end);
    })
    btnEdit.addEventListener(`click`,(e)=>{ 
      publishElement.disabled=false;
      e.target.parentElement.remove();
      firstNameElement.value=firstName;
      lastNameElement.value=lastName;
      ageElement.value=age;
      storyTitleElement.value=storyTitle;
      genreElement.value=genre;
      myStoryElement.value=story;
    })
    btnDelete.addEventListener(`click`,(e)=>{
      e.target.parentElement.remove();
      publishElement.disabled=false;
    })
  });
}

