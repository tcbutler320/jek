---
layout: post
title:  "All About Themes"
date:   2021-06-06 09:34:43 -0400
categories: "About"
author: Tyler Butler
---  

```text
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██╗███████╗██╗░░██╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██║██╔════╝██║░██╔╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██║█████╗░░█████═╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░██╗░░██║██╔══╝░░██╔═██╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░╚█████╔╝███████╗██║░╚██╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░╚════╝░╚══════╝╚═╝░░╚═╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░ All About Themes ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```  

# How Jek Themes Work

1) When a first time user visits a jek site, the default theme *(light)* is used. An event listener loaded in a script from _includes/head.html waits for the page to load and then executes the checkStorage() function located in themeToggle.js. 

```javascript
window.addEventListener('load', (event) => {
  console.log('[DEBUG] page loaded, checking storage');
  checkStorage();
});
```  

2) checkStorage function checks if themes are set in order of customtheme, local theme, and session theme. If a custom theme is found, the function enables the class, displays the theme name to the page, and logs the event. If not, it checks the following storage locations and will do the same.

```javascript
function checkStorage(){
    console.log('[DEBUG checkStorage] starting checkStorage()');
    if (localStorage.customTheme) {
        document.body.classList.toggle(localStorage.customTheme);
        document.getElementById('whatHappened').innerHTML = 'theme |' + localStorage.customTheme;
        console.log('[DEBUG checkStorage] custom theme set');
    } else if (localStorage.theme) {
        document.body.classList.toggle(localStorage.theme);
        document.getElementById('whatHappened').innerHTML = 'theme |' + localStorage.theme;
        console.log('[DEBUG checkStorage] local theme set: ' + localStorage.theme);
    } else if (sessionStorage.theme) {
        document.body.classList.toggle(sessionStorage.theme);
        document.getElementById('whatHappened').innerHTML = 'theme |' + sessionStorage.theme;
        console.log('[DEBUG checkStorage] session theme set: ' + sessionStorage.theme);
    }
}
```  

3) Darkmode works in a similar fashion, except the darkMode function simply checks if light or dark theme is set. If so, it toggles the opposite theme. If neither dark or light mode is set, it puts the theme settings to light. 

```javascript
function darkMode() {
    console.log('[DEBUG darkMode] user clicked darkMode');
    if (sessionStorage.theme == 'light') {
        console.log('[DEBUG] setting sessionStorage.theme to dark');
        sessionStorage.theme = 'dark';
        document.body.classList.toggle(sessionStorage.theme);
        location.reload();
    } else if (sessionStorage.theme == 'dark') {
        console.log('[DEBUG] setting sessionStorage.theme to light');
        sessionStorage.theme = 'light';
        document.body.classList.toggle(sessionStorage.theme);
        location.reload();
    } else {
        console.log('[DEBUG] null, added light to session storage');
        sessionStorage.theme = 'light';
        document.body.classList.toggle(sessionStorage.theme);
    }
}
```



4) to open the theme menu on desktop, press the `escape` key. An event listener in `assets/js/keyInput.js` will trigger the menu modal once escape is pressed

```javascript
  if (code = 'Escape') {
    modal.style.display = "block";
  }
```

   
