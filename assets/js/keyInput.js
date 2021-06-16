document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;


    /* use https://keycode.info/ */
    if (code = 'Escape') {
      modal.style.display = "block";
    }
  }, false);