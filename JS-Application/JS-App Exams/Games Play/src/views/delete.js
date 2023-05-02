import { deleteAGame } from "../api/data.js";


export async function deleteView(ctx){
    const id=ctx.params.id;
    await deleteAGame(id);
    ctx.page.redirect('/');
}