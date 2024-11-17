#!/bin/bash
cp -r ./dist ../shikai
cd ../shikai
sed -i -n 's/window.__is_debug = true/window.__is_debug = false/' index.html
sed -i -n 's/window.__is_debug = true/window.__is_debug = false/' monitor.html
cd ../
sudo mv -f ./shikai /usr/share/web-greeter/themes/
sudo sed -i -n 's/.*theme:.*/theme: shikai/g' /etc/lightdm/web-greeter.yml