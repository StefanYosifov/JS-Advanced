function solve() {
    // TODO ...

    const addButton = document.querySelector('#container button');
    const nameField = document.querySelector('#container input[placeholder="Name"]');
    const ageField = document.querySelector('#container input[placeholder="Age"]');
    const kindField = document.querySelector('#container input[placeholder="Kind"]');
    const currOwnerField = document.querySelector('#container input[placeholder="Current Owner"]');

    const adoptionField = document.querySelector('#adoption ul');
    const takenField = document.querySelector('#adopted ul');

    // console.log(addButton, nameField, ageField, kindField, currOwnerField);
    addButton.addEventListener('click', addNewPet);

    function addNewPet(event) {
        event.preventDefault();

        const name = nameField.value;
        let age = Number(ageField.value);
        const kind = kindField.value;
        const currOwner = currOwnerField.value;
        // age = Number(age);

        // nameField.value = '';
        // ageField.value = '';
        // kindField.value = '';
        // currOwnerField.value = '';

        const allFields = name.trim() !== ''
            && ageField.value.trim() !== ''
            && kind.trim() !== ''
            && currOwner.trim() !== '';

        const notNumber = Number.isNaN(age);

        if (allFields === false || notNumber === true) {
            return;
        }


        const newPet = createPetElement(name, age, kind, currOwner);
        adoptionField.appendChild(newPet);

        nameField.value = '';
        ageField.value = '';
        kindField.value = '';
        currOwnerField.value = '';
    }

    function createPetElement(name, age, kind, currOwner) {
        const resultLi = document.createElement('li');
        const paraInfo = document.createElement('p');
        const strongName = document.createElement('strong');
        strongName.textContent = name;
        const strongAge = document.createElement('strong');
        strongAge.textContent = age;
        const strongKind = document.createElement('strong');
        strongKind.textContent = kind;

        // paraInfo.innerText += `${strongName} is a ${strongAge} year old ${strongKind}`;
        paraInfo.appendChild(strongName);
        paraInfo.innerHTML += ` is a `;
        paraInfo.appendChild(strongAge);
        paraInfo.innerHTML += ` year old `;
        paraInfo.appendChild(strongKind);

        // ${strongAge} year old ${strongKind}`;

        const spanOwner = document.createElement('span');
        spanOwner.textContent = `Owner: ${currOwner}`;
        const buttonContact = document.createElement('button')
        buttonContact.textContent = 'Contact with owner';

        buttonContact.addEventListener('click', (event) => contactOwner(event, buttonContact, resultLi));

        resultLi.appendChild(paraInfo);
        resultLi.appendChild(spanOwner);
        resultLi.appendChild(buttonContact);


        return resultLi;
    }

    function contactOwner(event, buttonContact, parentLi) {
        event.preventDefault();
        // const parentLi = event.target.parentElement;
        // event.target.textContent = 'Yes! I take it!';

        buttonContact.remove();
        const newDiv = document.createElement('div');
        const inputName = document.createElement('input');
        inputName.placeholder = 'Enter your names';
        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'Yes! I take it!';

        newDiv.appendChild(inputName);
        newDiv.appendChild(confirmButton);
        parentLi.appendChild(newDiv);
        confirmButton.addEventListener('click', (event) => confirmNewOwner(event, inputName, parentLi));
    }

    function confirmNewOwner(event, inputName, parentLi) {
        event.preventDefault();

        const newOwnerName = inputName.value;
        inputName.value = '';
        // if (!newOwnerName.trim()) {
        if (!newOwnerName) {
            return;
        }

        const spanOwner = parentLi.querySelector('span');
        spanOwner.textContent = `New Owner: ${newOwnerName}`;
        // const oldButton = parentLi.querySelector('button');
        // oldButton.remove();

        const oldDiv = parentLi.querySelector('div');
        oldDiv.remove();

        const checkedButton = document.createElement('button');
        checkedButton.textContent = 'Checked';
        checkedButton.addEventListener('click', function () {
            parentLi.remove();
        });
        parentLi.appendChild(checkedButton);

        takenField.appendChild(parentLi);
    }
}