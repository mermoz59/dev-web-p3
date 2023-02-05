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

    container.appendChild(figure);

    figure.appendChild(img);
    figure.appendChild(p);    
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

        data.forEach(image => {
            const figure = document.createElement('figure');
            figure.id = image.id;
            const img = document.createElement('img');
            const iconsButton = document.createElement('div');
            const iconDelete = document.createElement('button');
            const iconMove = document.createElement('button');
            
            img.src = image.imageUrl;
            img.crossOrigin = "anonymous";
            iconDelete.className = "fa-sharp fa-solid fa-trash-can"
            iconDelete.id = "delete-button"
            iconsButton.className = "button-modal"
            iconMove.className = "fa-solid fa-up-down-left-right"

            figure.appendChild(img);
            figure.appendChild(iconsButton);
                
            container.appendChild(figure);
            iconsButton.appendChild(iconMove)
            iconsButton.appendChild(iconDelete)
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

.then(response => response.json())
.then(data => {
  if (data.success) {
    figure.remove();
  }
})
.catch(error => console.error(error));
}
});

document.getElementById("add-button").addEventListener("click", function() {
    document.getElementById("modal1").style.display = "none";
    document.getElementById("modal2").style.display = "flex";
});

document.getElementById("button-go-back").addEventListener("click", function() {
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal1").style.display = "flex";
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelector('#modal2').style.display = 'none';
    }
});

document.querySelector('#modal2').addEventListener('click', function(event) {
    if (event.target === this) {
        document.querySelector('#modal2').style.display = 'none';
    }
});

document.querySelector('#button-close2').addEventListener('click', function() {
    document.querySelector('#modal2').style.display = 'none';
});

document.getElementById('custom-file-input').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function() {
    var file = this.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function() {
      document.getElementById('preview').src = reader.result;
      document.getElementById('preview').style.display = 'block';
    });

    reader.readAsDataURL(file);
});

const titleInput = document.querySelector('#title-input');
const categorySelect = document.querySelector('#category-select');
const buttonValid = document.querySelector('#button-valid');

function checkFields() {
    if (titleInput.value.trim() !== '' && categorySelect.value !== '') {
      buttonValid.style.backgroundColor = '#006400';
      return true;
    } else {
      buttonValid.style.backgroundColor = '#808080';
      return false;
    }
  }

buttonValid.addEventListener('click', function(event) {
    if (!checkFields()) {
      alert('Veuillez remplir tous les champs.');
      event.preventDefault();
    }
});

titleInput.addEventListener('input', checkFields);
categorySelect.addEventListener('change', checkFields);


document.getElementById("button-valid").addEventListener("click", function(event) {
    event.preventDefault();
  
    const title = document.getElementById("title-input").value;
    const category = document.getElementById("category-select").value;
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    
    const image = document.getElementById("file-input").files[0];
    if (image) {
    formData.append("image", image);
    }
  
    const token = localStorage.getItem("token");
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5678/api/works");
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.send(formData);
});
