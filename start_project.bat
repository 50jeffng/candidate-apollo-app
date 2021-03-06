@ECHO OFF
REM Run mongodb server, gets first line from mongodb_path.txt, it should be your mongodb directory
SET /p DBPATH=<mongodb_path.txt
START cmd.exe /k "mongod --dbpath=%DBPATH%"
CD .\client
REM Changes emulator port to point to localhost port, change '8080' to process.env.SERVER_PORT
adb reverse tcp:8080 tcp:8080
START cmd.exe /k "yarn start"
START cmd.exe /c "npx react-native run-android"
cd ..\server
START cmd.exe /k npm run start