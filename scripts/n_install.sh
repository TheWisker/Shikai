#!/bin/bash
cp -r ./dist ../shikai
cd ../shikai
sed -i 's/window.__is_debug = true/window.__is_debug = false/' index.html
sed -i 's/window.__is_debug = true/window.__is_debug = false/' monitor.html
cd ../
mv -f ./shikai /usr/share/web-greeter/themes/
sudo sed -i 's/.*greeter-session=.*/greeter-session=nody-greeter/g' /etc/lightdm/lightdm.conf
sudo sed -i 's/.*theme:.*/theme: shikai/g' /etc/lightdm/web-greeter.yml
sudo sed -i 's/.*background_images_dir:.*/background_images_dir: \/usr\/share\/web-greeter\/themes\/shikai\/assets\/media\/wallpapers\//g' /etc/lightdm/web-greeter.yml
sudo sed -i 's/.*logo_image:.*/logo_image: \/usr\/share\/web-greeter\/themes\/shikai\/assets\/media\/logos\//g' /etc/lightdm/web-greeter.yml