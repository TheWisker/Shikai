/*! 
shikai 1.6.0 distribution
            
Copyright (c) 2024, TheWisker (https://github.com/TheWisker)
All rights reserved.
                            
This source code is licensed under the GNU license found in the
LICENSE file in the root directory of this source tree.

License information can be found in the LICENSE.shikai file.
 */
!function(){"use strict";function n(){return!0===window.__is_debug?"./assets/media/wallpapers/":greeter_config.branding.background_images_dir}function e(n,e){if(!0===window.__is_debug){for(var t=[],r=1;r<12;r++)t.push("Wallpaper"+(r>9?r:"0"+r)+"."+(r>10?"png":"jpg"));return t.map((function(e){return n+e}))}theme_utils.dirlist(n,!0,e)}function t(){var t=function(n){document.body.onclick=function(e){if(e.target==e.currentTarget){var t=n[Math.floor(Math.random()*n.length)];document.body.style.backgroundImage="url('"+t+"')",greeter_comm&&greeter_comm.broadcast(t)}}};window.__is_debug?t(e(n())):e(n(),t)}window.onload=function(){window.__is_debug?t():void 0===window.lightdm?window.addEventListener("GreeterReady",(function(){t()})):t()},window.addEventListener("GreeterBroadcastEvent",(function(n){document.body.style.backgroundImage="url('"+n.data+"')"}))}();