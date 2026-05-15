function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data));
}

function LoadUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(data=>LoadusersData(data))


}

function LoadusersData(dataInfo){
    console.log(dataInfo)
}