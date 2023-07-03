const uploadContainer = document.getElementById('uploadContainer');
    const uploadForm = document.getElementById('uploadForm');
    const photoInput = document.getElementById('photoInput');
    const parameterInput = document.getElementById('parameterInput');
    const imageContainer = document.getElementById('images');
    const numOfFiles = document.getElementById('num-of-files');

    photoInput.addEventListener('change', handleFileSelection);

    function handleFileSelection() {
      if (photoInput.files.length > 0) {
        uploadContainer.style.display = 'block';
      } else {
        uploadContainer.style.display = 'none';
      }
      preview();
    }

    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData();
      for (let i = 0; i < photoInput.files.length; i++) {
        formData.append('photo', photoInput.files[i]);
        formData.append('parameter', parameterInput.value);
      }

      // Here you can implement the code for uploading the selected images and parameters to the server
      // You can access the selected files using "photoInput.files"
      // You can access the parameter value using "parameterInput.value"
      // Perform your upload logic or make an AJAX request to the server
      // Display success or failure messages accordingly
      console.log("Upload form submitted");

      // Reset form after submission
      uploadForm.reset();
      uploadContainer.style.display = 'none';
      imageContainer.innerHTML = '';
      numOfFiles.textContent = '';
    });

    function preview() {
      imageContainer.innerHTML = '';
      numOfFiles.textContent = `${photoInput.files.length} Files Selected`;

      for (let i = 0; i < photoInput.files.length; i++) {
        let file = photoInput.files[i];
        let reader = new FileReader();
        let figure = document.createElement('figure');
        let figCap = document.createElement('figcaption');
        figCap.innerText = file.name;
        figure.appendChild(figCap);
        reader.onload = () => {
          let img = document.createElement('img');
          img.setAttribute('src', reader.result);
          figure.insertBefore(img, figCap);
        }
        reader.readAsDataURL(file);
        imageContainer.appendChild(figure);
      }
    }