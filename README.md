
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




> Jek is a minimalist jekyll theme putting the power of color schemes in the user's hands. Toggle between schemes hassle-free, create new one's on the go, and store settings in-browser.  

### 🛠️ Installation  

To install Jek, you can use the [ruby gem](https://rubygems.org/gems/jek) or clone the [github repository](https://github.com/tcbutler320/jek). It's currently recommended to install from git clone as several kinks in the gem are being worked out.

**Install from Github**   
1) Clone the jek repository 

`git clone https://github.com/tcbutler320/jek`  

2) CD into project and run bundler

`cd jek && bundle install`

3) Launch jekyll developent server

`bundle exec jekyll serve`


**Install from Gem** 

1) Create a new jekyll project

`jekyll new myJekTheme`

2) Change default `minima` theme to `jek`  
   
```text
# Build settings
theme: jek
```  


3) Change `gemfile` to the following 

```text
source "https://rubygems.org"

gem "jekyll"
gem "jekyll-feed"
gem "jek"
```  

4) Install gem 

`bundle install`

### ⚡ Features  

*Client Side Themes*  
+  [x] toggle between dark/light mode by clicking the moon
+  [x] choose a random theme by clicking the pallet
+  [x] save current theme by clicking the astronaut

*Site Content*  
+  [x] About me
+  [x] Blog posts
+  [x] Socials  


### 🚧 Roadmap  
*Features in the work*  
+  [ ] Integration with firebase for user login
+  [ ] bug fixes in theme changes (current issues prevent smooth transitions)
+  [ ] add custom themes on the fly via pop-up modal
+  [ ] key bindings for quick feature access




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

Below is the current themes that come pre-configured with jek, more comming soon!

**dark**  

![](/assets/img/readme/preview-dark.png)

**sunset**  

![](/assets/img/readme/preview-sunset.png)

**dragos**

![](/assets/img/readme/preview-dragos.png)  