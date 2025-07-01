   
    const openButton = document.querySelector('.button-safe');
    const dialog = document.getElementById('dialog-id');
    const closeButton = document.getElementById('closeButton');
          closeButton.addEventListener('click', function() {dialog.close();
            });
    openButton.addEventListener('click', function() {
      dialog.showModal();
    });
    
  