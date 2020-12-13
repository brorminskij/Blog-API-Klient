let container = document.getElementById('postContainer');

window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {
        let response = await fetch('http://localhost:3000/posts/');
        let allPosts = await response.json();
        for (let post of allPosts) {
            console.log(post['_id']);


            container.innerHTML += `<h5>Title: ${post.title}</h1>`
            container.innerHTML += `<h5>Author: ${post.author}</h2>`
            let postDate = new Date(post.date);
            container.innerHTML += `<h6>${postDate.getFullYear()}-${postDate.getMonth() + 1}-${postDate.getDate()}</h6>`;
            container.innerHTML += `<h5>Content: ${post.content.substring(0,100)}`;
            container.innerHTML += `<a href="/post.html?id=${post['_id']}">Read More</a>`;
            container.innerHTML += `<h6>Tags: ${post.tags}</h6>`;

        }
    } catch (message) {
        throw new Error(message);
    }
}