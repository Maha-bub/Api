function LoadUsers2(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(users=>displayUsers2(users))
}


function displayUsers2(data){
    const ul=document.getElementById('users-list');
    for(const user of data){
        const li=document.createElement('li');
        li.innerHTML=user.name;

        ul.appendChild(li)
    }




}