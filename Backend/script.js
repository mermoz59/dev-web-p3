// fetch('http://localhost:5678/api/works')
//   .then(response => response.json())
//   .then(data => console.table(data))
//   .catch(error => console.error(error))

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


    figure.appendChild(img);
    figure.appendChild(p);
        
    container.appendChild(figure);
  });
})
.catch(error => console.error(error))

function filterImages(categoryIds) {
    fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('image-container');
        container.innerHTML = "";
        data.forEach(image => {
            if (categoryIds.includes(image.categoryId)) {
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                img.src = image.imageUrl
                img.crossOrigin = "anonymous";

                const p = document.createElement('p');
                p.textContent = image.title;

                figure.appendChild(img);
                figure.appendChild(p);

                container.appendChild(figure);
            }
        });
    })
    .catch(error => console.error(error))
}

const button1 = document.getElementById("filters##all");
const button2 = document.getElementById("filters##objects");
const button3 = document.getElementById("filters##apartments");
const button4 = document.getElementById("filters##hotels");

button1.addEventListener("click", () => filterImages([1, 2, 3]));
button2.addEventListener("click", () => filterImages([1]));
button3.addEventListener("click", () => filterImages([2]));
button4.addEventListener("click", () => filterImages([3]));


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


let elements = document.querySelectorAll('a.wrapper--edit');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        document.querySelector('#modal1').style.display = 'flex';

        fetch('http://localhost:5678/api/works')
        .then(response => response.json())
        .then(data => {
        const container = document.getElementById('modal-gallery');
        container.innerHTML = "";
        // container.style.display = 'flex';
        // container.style.flexWrap = 'wrap';

        data.forEach(image => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = image.imageUrl;
            img.height = 105; 
            img.width = 78;
            img.crossOrigin = "anonymous";

            figure.appendChild(img);
                
            container.appendChild(figure);
        });
        })
        .catch(error => console.error(error))

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.querySelector('#modal1').style.display = 'none';
            }
        });

        document.querySelector('#modal1').addEventListener('click', function(event) {
            if (event.target === this) {
                document.querySelector('#modal1').style.display = 'none';
            }
        });

        document.querySelector('#button-close').addEventListener('click', function() {
            document.querySelector('#modal1').style.display = 'none';
        });

    });
}