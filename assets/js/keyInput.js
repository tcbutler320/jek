document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    document.getElementById('input-selection').innerHTML = name;

    // if (code = 'Shift') {
    //     changeTheme();
    // }
  }, false);