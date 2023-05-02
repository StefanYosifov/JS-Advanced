async function request(url,options){
    const response= await fetch(url,options);
    if(response.ok!=true){
        throw new Error('Invalid');
    }
    const data=await response.json();
    return data;
}

 async function getAllBooks(){
    const url='http://localhost:3030/jsonstore/collections/books';
    const books=await request(url,)
    

    const rows=Object.entries(books).map(createRow).join('\n');
    document.querySelector('tbody').innerHTML=rows;
 }

 function createRow(id,book){
    const result=`
    <tr data-id>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    </tr>
    `
 }

async function createAllBooks(book){
    const url='http://localhost:3030/jsonstore/collections/books';
    const result=await request(url,{
        method:'post',
        headers:{'Content-Type':'Application/json'},
        body: JSON.stringify(book)
    })
    return result;
}

async function updateBook(id,book){
    const url='http://localhost:3030/jsonstore/collections/books'+id;
    const result=await request(url,{
        method:'put',
        headers:{'Content-Type':'Application/json'},
        body: JSON.stringify(book)
    })
    return result;
}

async function deleteBook(id){
    const url='http://localhost:3030/jsonstore/collections/books'+id;
    const result=await request(url,{
        method:'delete',
    })
    return result;
}

function start(){
    document.getElementById('loadBooks').addEventListener('click',getAllBooks);
    document.getElementById('createForm').addEventListener('submit',createAllBooks);
}

start();


