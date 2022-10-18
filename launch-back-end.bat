ECHO Updating Back End Database
dotnet ef database update --project ./WorkoutApp/back-end/back-end
ECHO Building Back End
dotnet build ./WorkoutApp/back-end/back-end
ECHO Launching Back End
start dotnet run --project ./WorkoutApp/back-end/back-end