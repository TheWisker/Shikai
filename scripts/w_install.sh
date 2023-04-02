#!/bin/bash
cp -r ./dist ../shikai
cd ../shikai
sed -n 's/window.__is_debug = true/window.__is_debug = false/' index.html
sed -n 's/window.__is_debug = true/window.__is_debug = false/' monitor.html
cd ../
sudo mv -f ./shikai /usr/share/web-greeter/themes/
sudo sed -n 's/.*greeter-session=.*/greeter-session=web-greeter/g' /etc/lightdm/lightdm.conf
sudo sed -n 's/.*theme:.*/theme: shikai/g' /etc/lightdm/web-greeter.yml
sudo sed -n 's/.*background_images_dir:.*/background_images_dir: \/usr\/share\/web-greeter\/themes\/shikai\/assets\/media\/wallpapers\//g' /etc/lightdm/web-greeter.yml
sudo sed -n 's/.*logo_image:.*/logo_image: \/usr\/share\/web-greeter\/themes\/shikai\/assets\/media\/logos\//g' /etc/lightdm/web-greeter.yml