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
  const fileInput = document.getElementById('file-input')
  if (titleInput.value.trim() !== '' && categorySelect.value !== '404' && fileInput.files.length > 0) {
    buttonValid.style.backgroundColor = '#006400'
    return true
  } else {
    buttonValid.style.backgroundColor = '#808080'
    return false
  }
}
