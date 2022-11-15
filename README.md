# Where to find Design Patterns Used
	1. Polymorphism
		Base Class  - csc3380/WorkoutApp/back-end/Repositories/GenericRepository.cs
		Inherited Class - csc3380/WorkoutApp/back-end/Repositories/UserRepository,cs
		The repository classes inherit from generic repositroy and can override the subclass
		if they need to query in unique way such as loading relational data.

	2. Inversion Control - csc3380/WorkoutApp/back-end/
		We use dependency injection to resolve interfaces to implementations at runtime
		This is used in many cases but just for an example look at  csc3380/WorkoutApp/back-end/Controllers/UserController.cs
		We use constructor injection to provide implementations for interfaces such as IMapper and IUserRepository in this class.

	3. Builder Method - csc3380/WorkoutApp/back-end/Program.cs
		It is used all throught his file to configure the web server.
		Here is an example from the code where we use the builder design pattern
		// Add service to enable CORS
		builder.Services.AddCors(options =>
		{
			options.AddDefaultPolicy(policy => policy.SetIsOriginAllowed(origin => true)
													.AllowCredentials()
													.AllowAnyMethod()
													.AllowAnyHeader());
		});

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

# Rsetting back-end
  Updating back-end correctly:
    1. Open Visual Studio
    2. Open SQL Server Object Explorer: Located at (View->SQL Server Object Explorer)
    3. Inside of SQL Server Object Explorer
    4. Open Datbase Tables ((localdb)MSSQLLocalDB->Databases->System Databasesmaster->master->Tables)
    4. Select 4 Tables (dbo._EFMigrationsHistory, dbo.Users, dbo.Workouts, dbo.WorkoutSteps)
    5. Right Click and Delete
    6. New Window will pop up click Update Database
	7. Close Visual Studio
	8. Open git bash
    9. cd into root directory of project
    10. type ./launch.bat
    11. wait for project to load completely
    12. You are done

    Note:
    1. I took out the seeding data so there will be no workouts displayed on homepage by default
	2. When creating a workout instead of time for each step there is a unit that is not necessary for user to specify
    3. When you click on profile you are now able to input more information about yourself
