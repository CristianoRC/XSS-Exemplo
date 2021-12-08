const getAllComments = async () => {
    const response = await axios.get('http://localhost:3000/api/comment');
    const commentsContainer = document.getElementById('list-comments');
    const { comments } = response.data;
    comments.forEach(comment => {
        commentsContainer.innerHTML += generateCommentHtml(comment)
    });
}

const insertComment = async (comment) => {
    await axios.post('http://localhost:3000/api/comment', comment)
}

const clearInputs = () => {
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}

document.getElementById('comment-btn').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    await insertComment({ name, comment });
    clearInputs();
    alert('Comentário inserido com sucesso.')
})

const generateCommentHtml = (comment) => {
    console.log(comment)
    return `<li class="list-group-item">${comment.comment}</li>`
}

window.onload = async () => {
    clearInputs();
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('name');
    document.getElementById('nome-pessoa').innerHTML += userName;
    await getAllComments()
}


