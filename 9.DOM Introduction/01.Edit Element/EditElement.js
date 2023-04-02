function editElement(ref,match,replacer) {
    

    let text=ref.textContent;
    text=text.replaceAll(match,replacer);
    ref.textContent=text;

    let elementToEdit=document.getElementById('e1');
    elementToEdit.textContent=replacer;
}


editElement()