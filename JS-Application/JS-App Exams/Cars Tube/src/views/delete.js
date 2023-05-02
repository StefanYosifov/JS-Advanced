import { deleteCarById } from "../api/data.js";






export async function deleteView(ctx){
    const id=ctx.params.id;
    await deleteCarById(id);
    ctx.page.redirect('/catalog');
}