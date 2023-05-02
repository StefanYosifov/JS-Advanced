import { getMyBooks } from '../api/data.js';
import {page,render,html} from '../api/lib.js';
import { getUserData } from '../api/util.js';

const myBooksTemplate=(data)=>html

`
<section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            <ul class="my-books-list">
                    ${data.length==0
                    ?html`<p class="no-books">No books in database!</p>`
                    :html`${data.map(myBookCard)}`}
            </ul>

`

const myBookCard=(book)=>html
`
<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: ${book.type}</p>
<p class="img"><img src="${book.imageUrl}"></p>
<a class="button" href="/details/${book._id}">Details</a>
</li>

`

export async function myBooksView(ctx){
    const id=getUserData().id;
    console.log(id);
    const books=await getMyBooks(id);
    ctx.render(myBooksTemplate(books));
}