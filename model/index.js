const img = document.getElementById('img');
console.log(img);



const uploadImage = document.getElementById('uploadImage');

addEventListener("change", function(event) {
    var selectedFile = event.target.files[0];
    var selectedFileName = selectedFile.name;
    console.log(selectedFileName);
    document.getElementById('selectedFile').textContent = 'Selected File: ' + selectedFileName;
});

/* let fileTypes = /jpeg|jpg|png/;
let mineType = fileTypes.text(file.mineType);
let extname = path.extname(file.originalname); */
