---
layout: post
title:  "Jek Sprite Animations"
date:   2021-06-08 09:34:43 -0400
categories: "Features"
author: Tyler Butler
---  

```text
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██╗███████╗██╗░░██╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██║██╔════╝██║░██╔╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░██║█████╗░░█████═╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░██╗░░██║██╔══╝░░██╔═██╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░╚█████╔╝███████╗██║░╚██╗░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░╚════╝░╚══════╝╚═╝░░╚═╝░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░ Jek Sprite Animations ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```  

This blog post will serve as a testing ground for jek sprite animations. In another one of my themes, [jeksprite](https://github.com/tcbutler320/jeksprite), I tried combining jekyll with javascript sprite animations.I'll continue this trial, this time using sprites in features like   

+ [ ] animated sprite progress scrollers
+ [ ] *"freewalk"* sprites that roam page content
+ [ ] helpful tip sprites that provide suggestions or give callouts


<div  onclick="changeSprite();">
click to change sprite <i class="fas fa-users-cog fa-lg zoom"></i>
</div>
<br>

<canvas class="map3"></canvas>



<script src="{% link /assets/js/jeksprite-original.js %}"></script>
<script>
function changeSprite() {
    let sprites = ['/assets/img/sprites/Gnome Soldier.png', '/assets/img/sprites/gnome-f-green_hat-SWEN.png','/assets/img/sprites/gnome-f-red_hat-SWEN.png','/assets/img/sprites/gnome-f-violet_hat-SWEN.png','/assets/img/sprites/gnome-m-green_hat-SWEN.png','/assets/img/sprites/gnome-m-red_hat-SWEN.png','/assets/img/sprites/orig-green_cap-SWEN.png','/assets/img/sprites/orig-red_cap-SWEN.png']

    var randomItem = sprites[Math.floor(Math.random()*sprites.length)];
    console.log(randomItem);
    loadImage(randomItem);
    console.log('[DEBUG] Sprite Changed');

    let name = randomItem.split("/",5)[4]
    let final = name.split(".png",1);
}
</script>