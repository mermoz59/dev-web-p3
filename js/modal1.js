export function modalDisplay () {
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
}