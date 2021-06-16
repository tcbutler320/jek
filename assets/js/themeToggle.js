let i = 0;

function changeTheme() {
    theme = themes[i];
    let sessTheme = sessionStorage.getItem('theme');
    if (i < themes.length) {
        if (sessTheme) {
            sessionStorage.removeItem('theme');
            sessionStorage.setItem('theme', theme);
            i++;
            sessionStorage.setItem('theme', theme);
            i++;
        }
        checkStorage();
    } else {
        i = 0;
    }
}

function darkMode() {
    console.log('[DEBUG]{darkmode} user clicked darkMode toggles');
    var sessTheme = sessionStorage.getItem('theme');
    console.log('[DEBUG]{darkmode} sessionStorage value: ' + sessTheme);
    if (sessTheme == 'light') {
        console.log('[DEBUG]{darkmode} added dark to session storage');
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'dark');
    } else if (sessTheme == 'dark') {
        console.log('[DEBUG]{darkmode} added light to session storage');
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'light');
    } else if (sessTheme === null) {
        console.log('[DEBUG]{darkmode} null, added light to session storage');
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'dark');
    }
    checkStorage();
}

function saveFavorite() {
    let locTheme = localStorage.getItem('theme');
    let sessTheme = sessionStorage.getItem('theme');
    if ((sessTheme) && !(locTheme)) {
        localStorage.setItem('theme', sessTheme );
        console.log('setting favorite theme');
    } else if ((sessTheme) && (locTheme)) {
        console.log('remove old favorite theme');
        console.log('setting favorite theme');
        sessionStorage.removeItem('theme');
        localStorage.setItem('theme', sessTheme );
    }
    checkStorage();
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
    checkStorage();
}

function checkStorage(){
    console.log('[DEBUG] now in checkStorage');

    let locTheme = localStorage.getItem('theme');
    let customTheme = localStorage.getItem('customTheme');
    let sessTheme = sessionStorage.getItem('theme');

    if (customTheme) {
        document.body.classList.toggle(customTheme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + customTheme;
        console.log('[DEBUG] custom theme set');
    } else if (locTheme) {
        document.body.classList.toggle(locTheme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + locTheme;
        console.log('[DEBUG] local theme set: ' + locTheme);
    } else if (sessTheme) {
        document.body.classList.toggle(sessTheme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + sessTheme;
        console.log('[DEBUG] session theme set: ' + sessTheme);
    } else {
        document.body.classList.toggle('light');
        document.getElementById('whatHappened').innerHTML = 'theme: light';
        console.log('[DEBUG] no theme set: going light');
    }
}