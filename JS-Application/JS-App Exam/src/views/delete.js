import { deleteAnAlbumById } from "../api/data.js";





export async function deleteView(ctx){
    const id=ctx.params.id;
    await deleteAnAlbumById(id);
    ctx.page.redirect('/dashboard');
}