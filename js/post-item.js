import { displayGallery } from './gallery-display.js'

export function postItem () {
  document.getElementById('button-valid').addEventListener('click', function (event) {
    console.log(event)
    event.preventDefault()

    const title = document.getElementById('title-input').value
    const category = document.getElementById('category-select').value
    const container = document.getElementById('image-container')

    const formData = new FormData()
    formData.append('title', title)
    formData.append('category', category)

    const image = document.getElementById('file-input').files[0]
    if (image) {
      formData.append('image', image)
    }

    const token = localStorage.getItem('token')

    try {
      const response = fetch('http://localhost:5678/api/works', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        },
        body: formData
      })

      if (document.getElementById('button-valid').style.backgroundColor === 'rgb(0, 100, 0)') {
        alert('Image ajoutée avec succès !')
      }

      container.innerHTML = ''
      displayGallery()
    } catch (error) { console.error('There was an error:', error) }
  })
}
