import { updateAnAlbum,getAlbumById} from '../api/data.js';
import {html} from '../api/lib.js';
import { getUserData, hasEmptyFields } from '../api/util.js';



const editTemplate = (album, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form @submit=${onSubmit} class="edit-form">
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${album.singer}" />
                <input type="text" name="album" id="album-album" placeholder="Album" value="${album.album}" />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value="${album.imageUrl}" />
                <input type="text" name="release" id="album-release" placeholder="Release date" value="${album.release}" />
                <input type="text" name="label" id="album-label" placeholder="Label" value="${album.label}" />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${album.sales}" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>

`;


export async function editView(ctx){
    const id=ctx.params.id;
    const album=await getAlbumById(id);

    ctx.render(editTemplate(album,onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData=Object.fromEntries(new FormData(event.target));
        if(hasEmptyFields(formData)){
            return;
        }

        const singer = formData.singer;
        const album = formData.album;
        const image = formData.imageUrl;
        const release = formData.release;
        const label = formData.label;
        const sales = formData.sales;
        
        await updateAnAlbum(id,singer,album, image, release, label, sales);
        ctx.page.redirect("/details/" + id);
    }
}