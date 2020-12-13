window.onload = function() {
    fetchPost();
}

async function fetchPost() {
    let urlParams = new URLSearchParams(window.location.search);
    let container = document.querySelector('container')
    try {
        let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
        let post = await response.json();
        console.log(post)

        container.innerHTML += `<h5>Title: ${post.title}</h5>`
        container.innerHTML += `<h5>Author: ${post.author}</h5>`
        let postDate = new Date(post.date);
        container.innerHTML += `<h6>${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()}</h6>`;
        container.innerHTML += `<h5>Content: ${post.content.substring(0,100)}</h5>`;
        container.innerHTML += `<h6>Tags: ${post.tags}</h6>`;
        container.innerHTML += `<p><a href="index.html">Back</a></p>`;

    } catch (message) {
        throw new Error(message)
    }
}