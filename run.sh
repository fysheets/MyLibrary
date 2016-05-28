#!/bin/sh
osascript -e "tell application \"Terminal\" to set current settings of front window to settings set \"Grass\""
#Colors for output
RED='\033[0;31;47m'
BLUE='\033[1;4;34;47m'
NC='\033[0m' # No Color

#Check if our host entry exists
if grep -q mylibrary "/etc/hosts"; then
	echo "mylibrary.test.com host entry exists"
else
	echo "Need to add mylibrary.test.com to your /etc/hosts file.  OS will prompt for your password.  This will be a one-time operation."
	sudo bash -c 'echo -e "127.0.0.1\tmylibrary.test.com\n" >> /etc/hosts'
	echo "127.0.0.1\tmylibrary.test.com added to /etc/hosts"
fi
echo "Running local HTTP server (ctrl+c to exit)."
echo "${RED}My Library${NC} is @ ${BLUE}http://mylibrary.test.com:8000/MyLibrary/${NC} (cmd+double-click link)"
python -m SimpleHTTPServer;
echo "HTTP Server closed; process complete."