#!/bin/bash
cp -r ./dist ../shikai
cd ../shikai
sed 's/window.__is_debug = true/window.__is_debug = false/' index.html
sed 's/window.__is_debug = true/window.__is_debug = false/' monitor.html
cd ../
mv -f ./shikai /usr/share/web-greeter/themes/
sudo sed 's/.*greeter-session=.*/greeter-session=nody-greeter/g' /etc/lightdm/lightdm.conf
sudo sed 's/.*theme:.*/theme: shikai/g' /etc/lightdm/web-greeter.yml
sudo sed 's/.*background_images_dir:.*/background_images_dir: \/usr\/share\/web-greeter\/themes\/shikai\/assets\/media\/wallpapers\//g' /etc/lightdm/web-greeter.yml
sudo sed 's/.*logo_image:.*/logo_image: \/usr\/share\/web-greeter\/themes\/shikai\/assets\/media\/logos\//g' /etc/lightdm/web-greeter.yml