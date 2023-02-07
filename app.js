/* eslint-disable import/extensions */
import { postItem } from './js/post-item.js';
import { modalDisplay } from './js/modal1.js';
import { deleteItem } from './js/delete-item.js';
import { displayGallery } from './js/gallery-display.js';
import { imgPreview, titleInput, categorySelect, buttonValid, checkFields } from './js/file-input.js';
import { filterImages, buttonAll, buttonObjects, buttonApartments, buttonHotels } from './js/filter-images.js'


// DISPLAY GALLERY
displayGallery();

// BOUTONS FILTRER IMAGE
filterImages();


buttonAll.addEventListener("click", () => filterImages([1, 2, 3]));
buttonObjects.addEventListener("click", () => filterImages([1]));
buttonApartments.addEventListener("click", () => filterImages([2]));
buttonHotels.addEventListener("click", () => filterImages([3]));

buttonAll.addEventListener("click", () => {
  buttonAll.style.backgroundColor = "#1D6154";
  buttonObjects.style.backgroundColor = "#FFF";
  buttonApartments.style.backgroundColor = "#FFF";
  buttonHotels.style.backgroundColor = "#FFF";
  buttonAll.style.color = "black";
  buttonObjects.style.color = "#1D6154";
  buttonApartments.style.color = "#1D6154";
  buttonHotels.style.color = "#1D6154";
});

buttonObjects.addEventListener("click", () => {
  buttonAll.style.backgroundColor = "#FFF";
  buttonObjects.style.backgroundColor = "#1D6154";
  buttonApartments.style.backgroundColor = "#FFF";
  buttonHotels.style.backgroundColor = "#FFF";
  buttonAll.style.color = "#1D6154";
  buttonObjects.style.color = "black";
  buttonApartments.style.color = "#1D6154";
  buttonHotels.style.color = "#1D6154";
});

buttonApartments.addEventListener("click", () => {
  buttonAll.style.backgroundColor = "#FFF";
  buttonObjects.style.backgroundColor = "#FFF";
  buttonApartments.style.backgroundColor = "#1D6154";
  buttonHotels.style.backgroundColor = "#FFF";
  buttonAll.style.color = "#1D6154";
  buttonObjects.style.color = "#1D6154";
  buttonApartments.style.color = "black";
  buttonHotels.style.color = "#1D6154";
});

buttonHotels.addEventListener("click", () => {
  buttonAll.style.backgroundColor = "#FFF";
  buttonObjects.style.backgroundColor = "#FFF";
  buttonApartments.style.backgroundColor = "#FFF";
  buttonHotels.style.backgroundColor = "#1D6154";
  buttonAll.style.color = "#1D6154";
  buttonObjects.style.color = "#1D6154";
  buttonApartments.style.color = "#1D6154";
  buttonHotels.style.color = "black";
});

// MODAL DISPLAY
modalDisplay();

// DELETE UNE IMAGE
deleteItem();

// NAVIGATION ENTRE LES MODALES
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

// FILE INPUT
imgPreview();
checkFields();

buttonValid.addEventListener('click', function(event) {
  if (!checkFields()) {
    alert('Veuillez remplir tous les champs.');
    event.preventDefault();
  }
});

titleInput.addEventListener('input', checkFields);
categorySelect.addEventListener('change', checkFields);

// POST ITEM
postItem();
