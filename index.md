---
layout: home
---  

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

Jek is a minimalist jekyll theme putting the power of color schemes in the user's hands. Toggle between schemes hassle-free, create new ones on the go, and store settings in-browser.


## ⚡ Features 

- [x] toggle light/dark with <i class="far fa-moon zoom" onclick="darkMode();"></i>
- [x] choose random theme with <i class="fas fa-palette zoom" onclick="changeTheme();"></i>
- [x] save current theme for next visit with <i class="fas fa-user-astronaut zoom" onclick="saveFavorite();"></i>
- [x] open/close settings with <i class="fas fa-cogs zoom" onclick="toggleSettings();"></i>, or press escape key
- [x] clear settings with <i class="fas fa-sign-out-alt zoom" onclick="clearSettings();"></i>
 

## 💡 All About The Theme 

Theme settings are saved in [session](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and [local](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) storage. Toggling light/dark mode or choosing a random palette saves settings for only the current session. Clicking the save button adds the theme to local storage for future visits. 


## 🍭 Default Themes 

*Hover your mouse over the following sections to try out different themes!*  


{% for themes in site.data.themes %}
<div class="theme-options {{ themes.name }}" onclick="setSpeceficPallet('{{ themes.name }}');">
    <p class="center">{{ themes.name }} ~ Lorem ipsum dolor sit amet</p>
</div>
{% endfor %}  


## 👩‍🚀 Add New Themes  

Adding new themes to your new jek site could not be easier, just pick a background color and text color and add them to main.css. Once you're done, add your theme to _data/themes.yaml. Check out [colorhunt](https://colorhunt.co/) for inspiration.


1. Add a new scheme to main.css with background-color and color set.  
  
  ```css
  .mytheme {
    background-color: #0a1d37;
    color: #ffeedb;
  }
  ```  

1. Add a color scheme name to `_data/themes.yaml`.    
  
  ```yaml
  - name: mytheme
    enabled: true
  ```
