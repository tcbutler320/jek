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


Jek is a minimalist jekyll theme putting the power of color schemes in the user's hands. Toggle between schemes hassle-free, create new one's on the go, and store settings in-browser.  
### ⚡ Features  

+  [x] click <i class="far fa-moon zoom"></i> to toggle light/dark
+  [x] click <i class="fas fa-palette zoom"></i> to choose random pallet
+  [x] click <i class="fas fa-user-astronaut zoom"></i> to save settings

### 💡 All About The Theme 

Theme settings are saved in [session](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and [local](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) storage. Toggling light/dark mode or choosing a random pallet saves settings for only the current session. Clicking the save button adds the theme to local storage for future visits. 

### 👩‍🚀 Add New Themes  

Adding new themes to your new `jek` site could not be easier, just pick a background color and text color and add them to `main.css`. Once your done, add your theme to `_data/themes.yaml`. Check out [colorhunt](https://colorhunt.co/) for inspiration.


1) add a new scheme to main.css with a `background-color` and `color`.  

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

### 🌈 Default Themes

*dark*  

![](/assets/img/readme/preview-dark.png)

*sunset*   

![](/assets/img/readme/preview-sunset.png)

*dragos*  

![](/assets/img/readme/preview-dragos.png)  