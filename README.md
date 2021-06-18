
```text
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██╗███████╗██╗░░██╗░░░░░░░░░
░░░░░░░░░░██║██╔════╝██║░██╔╝░░░░░░░░░
░░░░░░░░░░██║█████╗░░█████═╝░░░░░░░░░░
░░░░░██╗░░██║██╔══╝░░██╔═██╗░░░░░░░░░░
░░░░░╚█████╔╝███████╗██║░╚██╗░░░░░░░░░
░░░░░░╚════╝░╚══════╝╚═╝░░╚═╝░░░░░░░░░
░░░░░░░░░░░░░ by Tyler Butler ░░░░░░░░
```    
[![Netlify Status](https://api.netlify.com/api/v1/badges/9d1f745e-c8d9-4732-ab34-06748d61e84d/deploy-status)](https://app.netlify.com/sites/jekyll-jek/deploys) [![Gem Version](https://badge.fury.io/rb/jek.svg)](https://badge.fury.io/rb/jek)


Jek is a minimalist jekyll theme putting the power of color schemes in the user's hands. Toggle between schemes hassle-free, create new one's on the go, and store settings in-browser.  
### ⚡ Features  
+ [x] toggle light/dark with <i class="far fa-moon zoom" onclick="darkMode();"></i>
+ [x] choose random theme with <i class="fas fa-palette zoom" onclick="changeTheme();"></i>
+ [x] save current theme for next visit with <i class="fas fa-user-astronaut zoom" onclick="saveFavorite();"></i>
+ [x] open/close settings with <i class="fas fa-cogs zoom" onclick="toggleSettings();"></i>, or press escape key
+ [x] clear settings with <i class="fas fa-sign-out-alt zoom" onclick="clearSettings();"></i>
 

### 💡 All About The Theme 

Theme settings are saved in [session](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and [local](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) storage. Toggling light/dark mode or choosing a random pallet saves settings for only the current session. Clicking the save button adds the theme to local storage for future visits. 

### 🍭 Default Themes 

![](/assets/img/readme/jek.gif)

### 👩‍🚀 Add New Themes  

Adding new themes to your new jek site could not be easier, just pick a background color and text color and add them to main.css. Once your done, add your theme to _data/themes.yaml. Check out [colorhunt](https://colorhunt.co/) for inspiration.


1) add a new scheme to main.css with a background-color and color.  

```
.mytheme {
    background-color: #0a1d37;
    color: #ffeedb;
}
```  

2) Add color scheme name to _data/themes.yaml  

```yaml
- name: mytheme
  enabled: true
```
