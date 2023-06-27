/*! 
shikai 1.5.0 distribution
            
Copyright (c) 2023, TheWisker (https://github.com/TheWisker)
All rights reserved.
                            
This source code is licensed under the GNU license found in the
LICENSE file in the root directory of this source tree.

License information can be found in the LICENSE.shikai file.
 */
!function(){"use strict";function n(){return!0===window.__is_debug?"./assets/media/wallpapers/":greeter_config.branding.background_images_dir}function e(n,e){if(!0===window.__is_debug){for(var t=["Wallpaper18.png"],i=1;i<18;i++)t.push("Wallpaper"+(i>9?i:"0"+i)+".jpg");return t.map((function(e){return n+e}))}theme_utils.dirlist(n,!0,e)}function t(){var t=function(n){document.body.onclick=function(e){e.target==e.currentTarget&&(document.body.style.backgroundImage="url('"+n[Math.floor(Math.random()*n.length)]+"')")},document.body.click()};window.__is_debug?t(e(n())):e(n(),t)}window.onload=function(){window.__is_debug?t():void 0===window.lightdm?document.addEventListener("GreeterReady",(function(){t()})):t()}}();