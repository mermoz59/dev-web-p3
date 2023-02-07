export function deleteItem () {
    document.querySelector('#modal-gallery').addEventListener('click', function(event) {
        if (event.target.id === 'delete-button') {
        const figure = event.target.parentNode.parentNode;
        const id = figure.id;
        const token = localStorage.getItem('token');
        
        fetch(`http://localhost:5678/api/works/${id}`, {
        method: 'DELETE',
        headers: {
        'Authorization': `Bearer ${token}`
    }
    })

    .then(response => figure.remove())
    .catch(error => console.error(error));
    location.reload();

}})}