/* function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
 //  .then(json => console.log(json.id)) id pawa jabe
//  .then(json => console.log(json.title)) title ta pawa jabe


 */

function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json() )
    .then(data  => console.log(data))
}

function loadUsers() {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUsers(json))
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
loadPost(); // load post click kora lagbe na auto load hoye jabe function call kore debar jonne 

function displayUsers (json) {
    console.log(json)
}