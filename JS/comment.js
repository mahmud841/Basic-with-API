console.log("comment");
function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
loadComments();

function displayComments(comments){
    console.log(comments)
    const commentContainer = document.getElementById('comments');
    for(const comment  of comments){
        const p = document.createElement('p');
        p.innerText = comment.name;
        p.style.textAlign ='center';
        commentContainer.appendChild(p);
    }
}
