function changeTheme(foo) {
    if (foo) {
        console.log('[DEBUG] dark mode enabled')
        document.body.classList.toggle('dark');
        document.getElementById('theme').innerHTML = ('dark');
    } else {
        var randomItem = themes[Math.floor(Math.random()*themes.length)];
        document.body.classList.toggle(randomItem);    
        console.log('[DEBUG] theme changed To',randomItem);
    }
}
