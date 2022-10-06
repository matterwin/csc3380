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
# If you can use: git merge 
	- git checkout your_branch.
	- git checkout main . #With period
	- git add --all
	- git commit -m "Copy from main to your_branch"
	- git push -u origin your_branch

# Palette Colors
	You can find the color palette in the /front-end/images/ directory
	where you will also find the diff color logo images.

# Steps to push to remote main (Only edit in your local branch)
	- make sure your local main is up-to-date via git pull
	- git checkout your_branch
	- make edits in your_branch
	- git add .
	- git commit -m "msg"
	- git push origin your_branch
	- go to github and make pull request and merge
	- after pull request, update your local main
	- git checkout main
	- git pull
	- git checkout your_branch
	- git merge main