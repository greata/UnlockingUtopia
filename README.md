UnlockingUtopia
===============
Hack4Good Berlin Project 2014 September

Problem to solve: How can we enough places to recover and recharge, produce more local organic food and reduce global warming?

UnlockingUtopia, is a global site that supports people to transform their own neighborhood into garden rich areas. People can spot unused areas, like roof tops, free spaces, building walls, in their neighborhood that they want to transform into gardens. The site supports you to team up with others who spotted the same areas like you and gives you guidance in the bureaucracy, plants to use, technology that is available in your own country and city. 

Current Features:
- spot a place by clicking on a map; add a title, description and the status
- view the map for existing spotted places;  
- Color coding for spotted places: red - new spot, yellow - already spotted by somebody else but not realized yet, green - spotted and realized garden

TODO:
- PDF printout generator for a spotted place
- How To Area - guideline to establish a garden in your country/city and extra success stories.
- Live ticker on the landing page, showing how many gardens have been established on country/city level.


Installation Guide


1. Install node.js and MongoDB.
2. Run the server
node ./Server/server.js
3. Configure Server
Go to \Server\config.example.json and rename it to \Server\config.json. Change the port or log level, if you like inside the config.json.
4. Access page via your browser by entering the URL.
http://localhost:5000/
5. Create Phonegap/Cordova app (http://docs.phonegap.com/, http://cordova.apache.org/) and use Shared as the app's www-directory.
