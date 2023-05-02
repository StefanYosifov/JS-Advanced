import { getCarById } from "../api/data.js";
import { html} from "../api/lib.js";
import { getUserData } from "../api/util.js";




const detailsTemplate=(car,currentUser,owner)=>html
`
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${car.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>

                <p class="description-para">${car.description}</p>

                ${currentUser==owner
                    ?html` 
                <div class="listings-buttons">
                    <a href="/edit/${car._id}" class="button-list">Edit</a>
                    <a href="/delete/${car._id}" class="button-list">Delete</a>
                 </div>`
                :html``}
               
            </div>
        </section>
`

export async function detailsView(ctx){
    const id=ctx.params.id;
    const car=await getCarById(id);
    const currentUser=getUserData().id;
    const owner=car._ownerId;
    ctx.render(detailsTemplate(car,currentUser,owner));
}