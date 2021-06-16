let i = 0;

function changeTheme() {
    theme = themes[i];
    if (i < themes.length){
        console.log('[DEBUG] theme changed To',theme);
        console.log('[DEBUG] i =' + i);
        document.body.classList.toggle(theme); 
        i++;
    } else {
        i = 0;
        document.body.classList.toggle(theme); 
    }
}

function darkMode() {
    console.log('[DEBUG] dark mode enabled');
    let sessTheme = sessionStorage.getItem('theme');
    
    if (sessTheme = 'light') {
        document.body.classList.toggle('dark');
        document.getElementById('theme').innerHTML = 'dark';
        console.log('[DEBUG] added dark to session storage');
        // sessionStorage.removeItem('key');
        sessionStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.toggle('light');
        document.getElementById('theme').innerHTML = 'light';
        console.log('[DEBUG] added light to session storage');
        // sessionStorage.removeItem('key');
        sessionStorage.setItem('theme', 'light');
    }
    
}

function saveFavorite() {
    var favScheme = document.getElementById('theme-control').value
    localStorage.setItem('favTheme', favScheme);
    document.body.classList.toggle(favScheme);
    console.log('[DEBUG] favtheme added to localstorage: ' + favScheme);
}


function checkFav() {
    const savedTheme = localStorage.getItem('favTheme');

    if (savedTheme){
        document.body.classList.toggle(savedTheme);    
        console.log('[DEBUG] theme changed To',savedTheme);
        document.getElementById('theme').innerHTML = savedTheme;
    } else {
        console.log('[DEBUG] no theme saved');
    }

}


function hoverTheme(opt) {
    document.body.classList.toggle(opt);
    var str1 = "hover zoom ";
    var str2 = opt;
    var foo = str1.concat(str2);
    document.getElementById(foo).style.fontWeight = "bold";

}

function reload(){
    location.reload();
}


/* set custom themes using session storage */

function setCustomBackground() {
    console.log('[DEBUG] custom backround entered');

    var background = document.getElementById("customBackground").value;
    let locBackground = localStorage.getItem('customBackground');

    if (locBackground) {
        localStorage.removeItem('customBackground');
        localStorage.setItem('customBackground',background);
        document.getElementById('whatHappened').innerHTML = 'removed previous saved background, set new background to ' + background;
    } else {
        localStorage.setItem('customBackground',background);
        document.getElementById('whatHappened').innerHTML = 'set new background to ' + background;
    }
}

function setCustomColor() {
    console.log('[DEBUG] custom color entered');

    var color = document.getElementById("customColor").value;
    let locColor = localStorage.getItem('customColor');

    if (locColor) {
        localStorage.removeItem('customColor');
        localStorage.setItem('customColor',color);
        document.getElementById('whatHappened').innerHTML = 'removed previous saved color, set new color to' + color;
    } else {
        localStorage.setItem('customColor',color);
        document.getElementById('whatHappened').innerHTML = 'set new color to ' + color;
    }
}

function setCustomTheme() {
    console.log('[DEBUG] custom theme entered');

    var theme = document.getElementById("customTheme").value;
    let locTheme = localStorage.getItem('customTheme');

    if (locTheme) {
        localStorage.removeItem('customTheme');
        localStorage.setItem('customTheme',theme);
        document.getElementById('whatHappened').innerHTML = 'removed previous saved theme, set new theme to ' + theme;
    } else {
        localStorage.setItem('customTheme',theme);
        document.getElementById('whatHappened').innerHTML = 'set new theme to ' + theme;
    }

    setTheme();
}

function setTheme(){
    console.log('[DEBUG] now in setTheme');

    let locTheme = localStorage.getItem('theme');
    let customTheme = localStorage.getItem('customTheme');
    let sessTheme = sessionStorage.getItem('theme');

    if (customTheme) {
        document.body.classList.toggle(customTheme);
        document.getElementById('whatHappened').innerHTML = 'custom theme set: ' + customTheme;
    } else if (locTheme) {
        document.body.classList.toggle(locTheme);
        document.getElementById('whatHappened').innerHTML = 'favorite theme found: ' + locTheme;
    } else if (sessTheme) {
        document.body.classList.toggle(sessTheme);
        document.getElementById('whatHappened').innerHTML = 'session theme found: ' + sessTheme;
    } else {
        document.body.classList.toggle('light');
        document.getElementById('whatHappened').innerHTML = 'no theme saved, default to light';
    }
}