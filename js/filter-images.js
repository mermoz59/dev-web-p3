export function filterImages (categoryIds) {
  if (!Array.isArray(categoryIds) && typeof categoryIds !== 'string') {
    return
  }

  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('image-container')
      container.innerHTML = ''
      data.forEach((image) => {
        if (categoryIds.includes(image.categoryId)) {
          const figure = document.createElement('figure')
          const img = document.createElement('img')
          img.src = image.imageUrl
          img.crossOrigin = 'anonymous'

          const p = document.createElement('p')
          p.textContent = image.title

          figure.appendChild(img)
          figure.appendChild(p)

          container.appendChild(figure)
        }
      })
    })
    .catch(error => console.error(error))
}

export const buttonAll = document.getElementById('filters-all')
export const buttonObjects = document.getElementById('filters-objects')
export const buttonApartments = document.getElementById('filters-apartments')
export const buttonHotels = document.getElementById('filters-hotels')
