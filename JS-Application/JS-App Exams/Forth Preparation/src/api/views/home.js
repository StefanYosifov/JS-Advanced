import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { get } from '../api.js'

const root = document.getElementById('main-content');
const homeTemplate = (data) => html
    `

<section id="welcome-world">
            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero">
            <div id="home-page">
                <h1>Latest Games</h1>

        ${data.length > 0 ?
        data.map(homeCard) :
        html` <p class="no-articles">No games yet</p>`}
            </div>
        </section>
`

const homeCard =(data) => html
`
<div class="game">
<div class="image-wrap">
    <img src="${data.imageUrl}">
</div>
<h3>${data.title}</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
    <a href="/details/:${data._id}" class="btn details-btn">Details</a>
</div>
</div>
`


const url = '/data/games?sortBy=_createdOn%20desc&distinct=category';
async function getData(url) {
    try {
        const data = await get(url);
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export async function renderHome() {
    const data = await getData(url);
    root.innerHTML=homeTemplate;
}