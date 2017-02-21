#!/bin/sh

if [ $(id -u) -ne 0 ]
  then echo "Please run as root"
  exit
fi

sudo rm /usr/share/X11/xkb/symbols/typo-uk
sudo rm /usr/share/X11/xkb/symbols/typo-ru-ukrainian
sudo cp symbols/* /usr/share/X11/xkb/symbols/

# Edit /usr/share/X11/xkb/rules/evdev.lst

sudo sed -i -E 's/\s*typo(-ru|-uk).*//g' /usr/share/X11/xkb/rules/evdev.lst
sudo sed -i -E 's/(! layout)/\1\n  typo-uk         Ukrainian (Typographic)\n  typo-ru-ukrainian         Russian (Typographic + Ukrainian)/g' /usr/share/X11/xkb/rules/evdev.lst
sudo sed -i -E 's/(! variant)/\1\n  typo-uk-russian    typo-uk: Ukrainian (Typographic + Russian)/g' /usr/share/X11/xkb/rules/evdev.lst

# Edit /usr/share/X11/xkb/rules/evdev.xml

sudo awk '/<\/layoutList>/ { system ( "cat ./rules/envdev.xml" ) } { print; }' /usr/share/X11/xkb/rules/evdev.xml >> /tmp/evdev.xml
sudo rm /usr/share/X11/xkb/rules/evdev.xml
sudo mv /tmp/evdev.xml /usr/share/X11/xkb/rules/evdev.xml

# Enable AltGr
gsettings set org.gnome.desktop.input-sources xkb-options "['lv3:ralt_switch']"

# Show further instructions
echo "Please log out and log in again, and then enable keyboard layouts at System Settings > Text Entry (search for \"Typographic\" input sources)."
