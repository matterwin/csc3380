# csc3380
	Group 3 (Team MMM): Bryce, Nicholas, Marvin, Matthew, Noah, Mohammad

# front end installation
	* Run windows installer from here https://phoenixnap.com/kb/install-node-js-npm-on-windows
	* Check version of node and npm with node -v, npm -v
	* Run: npm install react-components

# backend installation
	Download Visual Studio 2022:https://visualstudio.microsoft.com/vs/ NOTE IT MUST BE THIS VERSION OF VS
   
# controlling the backend
	Some commands to keep in mind for updating backend:
		* dotnet ef add migrations "MigrationName"
		* dotnet ef database update
   
# things to note
	Just keep in mind in order for the front end to work correctly 
	it has to be able to fetch data from the backend so just make
	sure you have the backend running before working with the front
	unless you are working on a part that does not require an endpoint

	ALSO NOTE TO NOT LAUNCH THIS ON FIREFOX... I (Noah) Have not setup
	https certificates with Firefox yet so if you attemp to fetch from 
	backend while using Firefox you will get a CORS error.
	
Push Commands:
	* git pull
	* git add .
	* git commit -m "message"
	* git push
	* git checkout main
