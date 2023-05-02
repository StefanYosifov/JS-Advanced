import { html, render } from '../node_modules/lit-html/lit-html.js';
const loadButton = document.getElementById('btnLoadTowns');


const liTemplate = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`


loadButton.addEventListener('click', (e) => {
    e.preventDefault();
    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ');
    const ul = document.createElement('ul');
    const result = liTemplate(towns);
    render(result, root);

    document.getElementById('towns').value = "";
    console.log(towns);
})



