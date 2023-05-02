import { deleteById } from "../api/data.js";




export async function deleteView(ctx){
    const id=ctx.params.id;
    await deleteById(id);
    ctx.page.redirect('/dashboard');
}