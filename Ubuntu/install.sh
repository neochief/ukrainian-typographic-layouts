#!/bin/sh

if [ $(id -u) -ne 0 ]
  then echo "Please run as root"
  exit
fi

sudo cp symbols/* /usr/share/X11/xkb/symbols/

# /usr/share/X11/xkb/rules/evdev.lst

sudo sed -i -E 's/\s*typo(-ru|-uk|_ukrainian|_russian).*//g' /usr/share/X11/xkb/rules/evdev.lst
sudo sed -i -E 's/(! layout)/\1\n  typo-ru         Russian (Typograhic)\n  typo-uk         Ukrainian (Typographic)/g' /usr/share/X11/xkb/rules/evdev.lst
sudo sed -i -E 's/(! variant)/\1\n  typo_ukrainian  typo-ru: Russian (Typographic + Ukrainian)\n  typo_russian    typo-uk: Ukrainian (Typographic + Russian)/g' /usr/share/X11/xkb/rules/evdev.lst

# /usr/share/X11/xkb/rules/evdev.xml

sudo awk '/<\/layoutList>/ { system ( "cat ./rules/envdev.xml" ) } { print; }' ~/Desktop/evdev.xml >> /tmp/evdev.xml
sudo rm /usr/share/X11/xkb/rules/evdev.xml
sudo mv /tmp/evdev.xml /usr/share/X11/xkb/rules/evdev.xml