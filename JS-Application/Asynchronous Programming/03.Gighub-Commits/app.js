async function loadCommits() {
    
    const username=document.getElementById('username').value;
    const repo=document.getElementById('repo').value;
    let commits=document.getElementById('commits');
    try{
    let request= await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
    let data= await request.json();
    console.log(data);
      const items=data.map(repo=>{
        const li=document.createElement('li');
        li.textContent=`${repo.commit.author.name}: ${repo.commit.message}`;
        commits.appendChild(li);
      });
      console.log(items);
    }
    catch(err){
        console.log(err);
    }
   


}