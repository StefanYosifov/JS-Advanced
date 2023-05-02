import { html, render } from '../node_modules/lit-html/lit-html.js';
import {cats} from './catSeeder.js';

const section=document.getElementById('allCats');

const template=(data)=>html
`<ul>
        ${data.map(cat=>html
        `<li>
            <img src="./images/${cat.imageLocation}.jpg">
            <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>Continue</p>
                    </div>
                </div>
        </li>
        `)}
 </ul>
`

onLoadRenderCats(cats);
function onLoadRenderCats(data){
    console.log(data);
    const resultRender=template(data);
    render(resultRender,section);
}