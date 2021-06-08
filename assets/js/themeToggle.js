function changeTheme() {
    let themes = ['dragos','dark','ocean'];
    var randomItem = themes[Math.floor(Math.random()*themes.length)];

    document.body.classList.toggle(randomItem);
    // document.getElementsByClassName('link').classList.toggle('link-white');

    console.log('[DEBUG] Theme Changed To',randomItem);

    document.getElementById('theme-selection').innerHTML = (randomItem);
}
