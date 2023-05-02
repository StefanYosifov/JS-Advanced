function solve() {
    
    let arrayOfFields=document.getElementsByClassName('form-control');
    let lectureElement=arrayOfFields[0].children[1];
    let dateElement=arrayOfFields[1].children[1];
    let moduleElement=arrayOfFields[2].children[1];
    let addButton=arrayOfFields[3].children[0];
    let trainingSectionElement=document.getElementsByClassName('user-view section-view')[0];
    let trainingsModuleElement=document.getElementsByClassName('modules')[0];
    addButton.addEventListener('click',addTraining);

    let lectures={};
    function addTraining(e){
        e.preventDefault();

        let lecture=lectureElement.value;
        let date=dateElement.value;
        let module=moduleElement.value;

        if(lecture==''||date==''||module=='Select module'){
            return;
        }

        if(!lectures[lecture]){
            lectures[lecture]=[];
        }
        let currentLecture={name:lecture,data:formatDate(date)};
        lectures[lecture].push(currentLecture);

        let header=createHeading(module,'h3');
        let ul=createListedElements(date,module);
        let delBtn=createDeleteButton();
        ul.children[0].appendChild(delBtn);
        trainingsModuleElement.appendChild(header);
        trainingsModuleElement.appendChild(ul);
        deleteContent(lectureElement,dateElement,moduleElement);


    }
    
    function createTrainings(){
        
    }

    function createHeading(module,typeOfHeading){
        let header=document.createElement(typeOfHeading);
        header.textContent=`${module}-Module`;
        return header;
    }
    function createListedElements(date,module){
        let ulElement=document.createElement('ul');
        let liElement=document.createElement('li');
        liElement.classList.add('flex');
        let [realDate,hours]=date.split('T');
        let h4Element=document.createElement('h4');
        h4Element.textContent=`${module} - ${realDate} ${hours}`;
       

        liElement.appendChild(h4Element);
        ulElement.appendChild(liElement);
        return ulElement;
    }
    function formatDate(date){
        let [realDate,hours]=date.split('T');
        date=date.replace(/-/g,'/');
        return`${realDate} - ${hours}`;
    }
    function createDeleteButton(){
        let deleteButton=document.createElement('button');
        deleteButton.textContent='Del';
        deleteButton.classList.add('red');
        return deleteButton;
    }

    function deleteContent(firstField,secondField,thirdField){
        firstField.value='';
        secondField.value='';
        thirdField.value='Select module';
    }
};