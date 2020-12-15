# Team24-GroupProject
Group Project for team 24

Title of your project:
    PG County Junk
Description of your project:
    PG county has a high number of 311 Junk Removal Request in its Urban Planing and TNI database. By mapping the locations of these junk removal requests, we are able to find junk hot spots. As students at UMD, we care about this data because it affects the environment in which we live in. Our project uses the CountyClick 311 API to list all the environment-related requests when users search for the information and maps their locations out through the Leaflet library.

Link to the Heroku instance where your application can be used:
    `https://team24-project.herokuapp.com/`

Description of target browsers (iOS? Android? Which ones? Which versions?):
    The application can be run on both IOS and Andriod operating systems through any common browsers such as Safari, Chrome, Firefox, etc. The application is best compatible with the latest version of the browsers.


----Developer Manual 
How to install your application and all dependencies:
    Our application is developed on Heroku using Node.js. The code files are included in the Github repository `https://github.com/LiangyunZ/Team24-GroupProject.git`. Before start building the application, you have to type `npm install` on github terminal to download all dependencies defined in a package.json file and generates a node_modules folder with the installed modules.

How to run your application on a server:
    You can directly go to the linked Heroku `https://team24-project.herokuapp.com/`

How to run any tests you have written for your software:
    You can test the code by type `npm start` on github terminal and go to localhost:3000 to see example app.

The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do:
    The API used for the server is `https://data.princegeorgescountymd.gov/resource/8nyi-qgn7.json`, a complete listing of non-emergency 311 service requests for Prince George's County since August 2016. The GET endpoint is used to retrieve data from the server at the PG County data resource. The POST endpoint is used to send data to the API server and modify the data.

A clear set of expectations around known bugs and a road-map for future development:
    We intended to get the longitude and latitude for each spot but the longtitude and latitude columns contain no data in the dataset, instead, we only have the street names. Since there is no free source to convert street name to lat/long(We have tried the `Geocoding` library but it requires a paid API key), we decided to convert the latest three requests to lat/long location manully and display them on the map through Leaflet. It seems that the map code works at this point.

    The manu button does not work on the map page. We suspect that the button might be affected by the map or the 3D animation.

    We intended to do a "sign up/log in" page for our users, but it seems unnecessary at this point. So we developed an session storage page called `signup.html`, please feel free to modify it in future. 