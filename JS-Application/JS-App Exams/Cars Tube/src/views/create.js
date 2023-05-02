import { createACar } from "../api/data.js";
import { html,render,page } from "../api/lib.js";
import { checkEmptyFields } from "../api/util.js";




const createTemplate=(onSubmit)=>html
`
<section id="create-listing">
            <div class="container">
                <form @submit=${onSubmit} id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`

export async function createView(ctx){
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData=new FormData(event.target);

        const brand=formData.get('brand');
        const model=formData.get('model');
        const description=formData.get('description');
        const year=formData.get('year');
        const image=formData.get('imageUrl');
        const price=formData.get('price');

        if(checkEmptyFields(brand,model,description,year,image,price)){
            return alert('All fields must be filled');
        }
        if(year<0 || price<0){
            return alert('Year and price must be positive numbers');
        }
        await createACar(brand,model,description,year,image,price);
        ctx.page.redirect('/catalog');
    }
}