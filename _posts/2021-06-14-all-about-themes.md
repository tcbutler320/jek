---
layout: post
title:  "All About Themes"
date:   2021-06-06 09:34:43 -0400
categories: bar
author: Tyler Butler
---  

```text
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██╗███████╗██╗░░██╗░░░░░░░░░
░░░░░░░░░░██║██╔════╝██║░██╔╝░░░░░░░░░
░░░░░░░░░░██║█████╗░░█████═╝░░░░░░░░░░
░░░░░██╗░░██║██╔══╝░░██╔═██╗░░░░░░░░░░
░░░░░╚█████╔╝███████╗██║░╚██╗░░░░░░░░░
░░░░░░╚════╝░╚══════╝╚═╝░░╚═╝░░░░░░░░░
░░░░░░░░░░░░░ All About Themes ░░░░░░░
```  

# 🍭 all about themes

1) to open the theme menu on desktop, press the `escape` key. An event listener in `assets/js/keyInput.js` will trigger the menu modal once escape is pressed

```javascript
  if (code = 'Escape') {
    modal.style.display = "block";
  }
```
<!-- Trigger/Open The Modal -->
<button id="myBtn">Open Modal</button>

  <script>
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <script> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;


        /* use https://keycode.info/ */
        if (code = 'Escape') {
          modal.style.display = "block";
        }
      }, false);
      
    </script>