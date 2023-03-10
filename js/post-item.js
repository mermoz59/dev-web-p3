import { displayGallery } from './gallery-display.js'
import { checkFields } from './file-input.js'

export function postItem () {
  document.getElementById('button-valid').addEventListener('click', async function (event) {
    console.log(event)
    event.preventDefault()

    const isFieldsValid = checkFields()
    if (!isFieldsValid) {
      alert('Veuillez remplir tous les champs.')
      return
    }

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
      const response = await fetch('http://localhost:5678/api/works', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token
        },
        body: formData
      })

      if (response.status === 201) {
        alert('Image ajoutée avec succès !')
      } else if (response.status === 400) {
        const error = await response.json()
        alert(`Erreur : ${error.message}`)
      } else if (response.status === 401) {
        alert('Non autorisé.')
      } else {
        alert('Une erreur inattendue s\'est produite.')
      }

      container.innerHTML = ''
      displayGallery()
    } catch (error) { console.error('There was an error:', error) }
  })
}
