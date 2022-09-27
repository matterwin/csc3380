# csc3380
	Group 3 (Team MMM): Bryce, Nicholas, Marvin, Matthew, Noah, Mohammad

# Front-End Installation
	Run windows installer from here https://phoenixnap.com/kb/install-node-js-npm-on-windows

# Front-End Commands
	- node -v
	- npm -v
	- npm install react-components
	- npm start
	- npm build

# Back-end Installation
	Download Visual Studio 2022:https://visualstudio.microsoft.com/vs/ NOTE IT MUST BE THIS VERSION OF VS
   
# Backend Commands
	- dotnet ef add migrations "MigrationName"
	- dotnet ef database update
   
# Things To Note
	Just keep in mind in order for the front end to work correctly 
	it has to be able to fetch data from the backend so just make
	sure you have the backend running before working with the front
	unless you are working on a part that does not require an endpoint

	ALSO NOTE TO NOT LAUNCH THIS ON FIREFOX... I (Noah) Have not setup
	https certificates with Firefox yet so if you attemp to fetch from 
	backend while using Firefox you will get a CORS error.
	
# Git Commands
	- git pull
	- git add .
	- git commit -m "message"
	- git push
	- git checkout main

# Copy from master to branch
# If you can use: git merge 
	- git checkout old_branch.
	- git checkout master . #With period
	- git add --all
	- git commit -m "Copy from master to old_branch"
	- git push -u origin old_branch
