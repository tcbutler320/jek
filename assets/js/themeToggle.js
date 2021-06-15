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
        sessionStorage.removeItem('key');
        sessionStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.toggle('light');
        document.getElementById('theme').innerHTML = 'light';
        console.log('[DEBUG] added light to session storage');
        sessionStorage.removeItem('key');
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

