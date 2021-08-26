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