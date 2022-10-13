@ECHO OFF
ECHO Launching Front End
start npm start --prefix ./WorkoutApp/front-end
ECHO Launching Back End
start dotnet run --project ./WorkoutApp/back-end/back-end
PAUSE
