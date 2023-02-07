export function postItem () {
    document.getElementById("button-valid").addEventListener("click", function(event) {
        console.log(event)
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
        location.reload();
    });
}