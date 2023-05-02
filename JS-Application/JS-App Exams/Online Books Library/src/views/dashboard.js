import { getAllBooks } from '../api/data.js';
import {page,render,html} from '../api/lib.js';




const dashboardTemplate=(data)=>html
`

<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            
            <ul class="other-books-list">
               ${data.length==0
                ?html`<p class="no-books">No books in database!</p>`
                :html`${data.map(dashCard)}`}
            </ul>
            
        </section>
`

const dashCard=(book)=>html
`
<li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src="${book.imageUrl}"></p>
                    <a class="button" href="/details/${book._id}">Details</a>
                </li>

`

export async function dashboardView(ctx){
    const allBooks=await getAllBooks();
    ctx.render(dashboardTemplate(allBooks));
}