export function imgPreview () {
  document.getElementById('file-input').addEventListener('change', function () {
    const file = this.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', function () {
      document.getElementById('preview').src = reader.result
      document.getElementById('preview').style.display = 'block'
    })

    reader.readAsDataURL(file)
  })
}

export const titleInput = document.querySelector('#title-input')
export const categorySelect = document.querySelector('#category-select')
export const buttonValid = document.querySelector('#button-valid')

export function checkFields () {
  if (titleInput.value.trim() !== '' && categorySelect.value !== '') {
    buttonValid.style.backgroundColor = '#006400'
    return true
  } else {
    buttonValid.style.backgroundColor = '#808080'
    return false
  }
}

buttonValid.addEventListener('click', function (event) {
  if (!checkFields()) {
    alert('Veuillez remplir tous les champs.')
    event.preventDefault()
  }
})

titleInput.addEventListener('input', checkFields)
categorySelect.addEventListener('change', checkFields)
