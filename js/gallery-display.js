export function displayGallery() {
    fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById('image-container');

    data.forEach(image => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = image.imageUrl;
        img.crossOrigin = "anonymous";

        const p = document.createElement('p');
        p.textContent = image.title;

        container.appendChild(figure);

        figure.appendChild(img);
        figure.appendChild(p);    
    });
    })
    .catch(error => console.error(error))
}

window.addEventListener('load', (event) => {
    if(localStorage.getItem('user') === 'true'){
        let loginButton = document.querySelector('#login-button');
        loginButton.innerHTML = "logout";
        let aside = document.querySelector('.aside--top');
        aside.style.display = "flex";
        let wrapperEdit = document.querySelectorAll('.wrapper--edit');
        let filtersBtn = document.querySelector('.filters--btn');
        filtersBtn.style.visibility = "hidden";
        wrapperEdit.forEach(element => {
            element.style.display = "flex";})
        }}
        
);
