function loadRepos() {
	

	const userID=document.getElementById('username').value;
	fetch(`https://api.github.com/users/${userID}/repos`)
	.then(handleReponse)
	.then(handleData)
	.catch(handleError);
}

function handleReponse(response){
	if(response.ok==false){
		throw new Error(`Error with response status ${response.status}`);
	}
	return response.json();
}

function handleData(data){
	const list=document.getElementById(`repos`);


	const items=data.map(repo=>{
		const li=document.createElement('li');
		const a=document.createElement('a');
		a.href=repo.html_url;
		a.textContent=repo.full_name;
		li.appendChild(a);

		return li;
	});
	list.replaceChildren(...items);
}
function handleError(error){
	const list=document.getElementById(`repos`);
	list.textContent=error.message;
}