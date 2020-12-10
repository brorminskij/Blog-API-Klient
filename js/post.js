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

        container.innerHTML += `<h1>${post.title}</h1>`
        container.innerHTML += `<h2>${post.author}</h2>`
        let postDate = new Date(post.date);
        container.innerHTML += `<h3>${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}</h3>`;
        container.innerHTML += `<p>${post.content}</p>`;
        container.innerHTML += `<h5>${post.tags}</h5>`;

    } catch (message) {
        throw new Error(message)
    }
}