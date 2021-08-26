function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then(data => dsiplayPosts(data))
}

loadPosts();

function dsiplayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts ) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
        `;
        postContainer.appendChild(div);
        console.log(post.title)
    }
    // console.log(posts);
}

//post korar jonne extra kaj hosse nicher moto
function addPost (){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body:JSON.stringify({
            title: 'My own post ',
            body: 'This is my all the posts ',
            userId: 11
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res =>  res.json())
    .then(data => console.log(data))

}