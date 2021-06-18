var i = 3;

function changeTheme() {
    theme = themes[i];
    if (i < themes.length) {
        sessionStorage.theme = theme;
        console.log('[DEBUG changeTheme] random theme changed to: ' + theme);
        document.body.classList.toggle(sessionStorage.theme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + sessionStorage.theme;
        document.getElementById('settingtbl-theme').innerHTML = 'theme: ' + sessionStorage.theme;
        i++;
    } else {
        i = 3;
        console.log('[DEBUG changeTheme] random theme changed to: ' + theme);
        document.body.classList.toggle(sessionStorage.theme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + sessionStorage.theme;
        document.getElementById('settingtbl-theme').innerHTML = sessionStorage.theme;

    }
}

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


function clearSettings() {
    sessionStorage.clear();
    localStorage.clear();
    console.log('[DEBUG] settings cleared');
    document.getElementById('whatHappened').innerHTML = 'settings cleared';
    location.reload();
}

function saveFavorite() {
    localStorage.theme = sessionStorage.theme;
    document.body.classList.toggle(localStorage.theme);  
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
    console.log('[DEBUG checkStorage] starting checkStorage()');
    if (localStorage.customTheme) {
        document.body.classList.toggle(localStorage.customTheme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + localStorage.customTheme;
        console.log('[DEBUG checkStorage] custom theme set');
    } else if (localStorage.theme) {
        document.body.classList.toggle(localStorage.theme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + localStorage.theme;
        console.log('[DEBUG checkStorage] local theme set: ' + localStorage.theme);
    } else if (sessionStorage.theme) {
        document.body.classList.toggle(sessionStorage.theme);
        document.getElementById('whatHappened').innerHTML = 'theme: ' + sessionStorage.theme;
        console.log('[DEBUG checkStorage] session theme set: ' + sessionStorage.theme);
    }
}

function settings() {
    console.log('[DEBUG][settings] user opened settings');
}

function toggleSettings() {
    var x = document.getElementById("myTable");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function setSpeceficPallet(foo){
    sessionStorage.theme = foo;
    console.log('[DEBUG] setting sessionStorage.theme to: ' + foo);
    document.body.classList.toggle(sessionStorage.theme);
}