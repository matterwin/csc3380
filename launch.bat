ECHO Updating Back End Database
dotnet ef database update --project ./WorkoutApp/back-end/back-end
ECHO Building Back End
dotnet build --project --project ./WorkoutApp/back-end/back-end
ECHO Launching Back End
start dotnet run --project ./WorkoutApp/back-end/back-end
ECHO Launching Front End
start npm start --prefix ./WorkoutApp/front-end