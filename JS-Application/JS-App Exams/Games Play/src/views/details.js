import { getGameById } from "../api/data.js";
import {page,render,html} from '../api/lib.js';
import { getUserData } from "../api/util.js";



const detailsTemplate=(detail,currentUser,owner)=>html`

<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="${detail.imageUrl}" />
                    <h1>${detail.title}</h1>
                    <span class="levels">MaxLevel: ${detail.maxLevel}</span>
                    <p class="type">${detail.category}</p>
                </div>

                <p class="text">
                    ${detail.summary}
                </p>

                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p class="no-comment">No comments.</p>
                </div>

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                ${currentUser==owner
                    ?html`<div class="buttons">
                    <a href="/edit/${detail._id}" class="button">Edit</a>
                    <a href="/delete/${detail._id}" class="button">Delete</a>
                </div>`
                :html``}
                
            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${currentUser==true?html`<article class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`
            :html``}
        </section>
`


export async function detailView(ctx){
    const id=ctx.params.id;
    console.log(id);
    const game=await getGameById(id);
    const currentUser=getUserData()?getUserData().id:'';
    const gameOwner=game._ownerId;

    ctx.render(detailsTemplate(game,currentUser,gameOwner));
}