window.onload = function() {
    prefillForm();
    updatePostEvent()
}


async function prefillForm() {
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('id'));


    try {
        let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
        let data = await response.json();
        console.log(data.content);

        document.getElementById('title').value = data.title;
        document.getElementById('author').value = data.author;
        document.getElementById('content-textarea').value = data.content;
        let hej = document.getElementById('tags').value = data.tags;
        console.log(hej)

    } catch (message) {
        throw new Error(message);
    }
}

function updatePostEvent() {
    let urlParams = new URLSearchParams(window.location.search);

    let form = document.getElementById('create-post-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        var selected = [];
        let taggar = document.getElementById('tags')
        for (var option of taggar.options) {
            if (option.selected) {
                var hej = selected.push(option.value)
            }
        }
        let object = {
            content: document.getElementById('content-textarea').value,
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            tags: selected
        }

        console.log(selected);

        console.log(object);
        console.log(JSON.stringify(object));


        try {
            var response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            });
            window.location.replace('index.html')
        } catch (message) {
            throw new Error(message)
        }
    })
}