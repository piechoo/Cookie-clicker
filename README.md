# Cookie-clicker
Web app made using React, redux and bootstrap  
This web-app is an incremental web-browser game inspired by game developed by Orteil. The goal of the game is to produce as many cookies (by clicking on the Big Cookie and buying machines to produce them) as you can. 
## Node backend
This web-app contains also simple backend server written in node, with which we can get actual score in the game.  
To run web-app in communication with backend mode, variable `REACT_APP_USE_API` in .env file must be set to true.  
REACT_APP_API_TIMEINTERVAL variable is time in miliseconds with which data will be refreshed in backend.

## Build and run project
### Build
To build project following commands should be run from project directory:
```
npm install 
```
***
### Run
To run this project following commands should be run from project directory:
```
npm start
```
And to run API in another terminal
```
cd API

node index.js
```
Now API is working on `localhost:5000` and UI is working on `localhost:3000`
***


