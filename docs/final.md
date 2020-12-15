Title:
    PG County Junk

Team members:
    Andrew Day, Krish Gaglani,  Michael Ajibade, Liangyun Zhang, and Chuan Wu

Link to where your app is running:
    `https://team24-project.herokuapp.com/`

Information problem you're trying to solve:
    PG County has a high number of 311 Junk Removal request and County Foreclosures, and there may be correlation between the two.

Identified stakeholders/target browsers:
    PG County Citizens, PG County Government, Environmentalists 

Data you chose to work with:
    PG County Urban Planning and TNI Databases

Chosen strategies and solutions for the problem:
    Using the County Click 311 API to mark the locations of junk removal requests and forclosures on map.

Technical system decision rationale:
    We made four pages for our system: homepage, sign up page, map page, and recent requests page base off the decision to display recent junk removal request in both map and text format. The homepage serves as an index for the whole system. The sign up page allows user to input their info and get recent update through Email. However, we decided to get rid of this function and use session storage instead because we are not able to benefit our users through Email at this point. The map page displays locations of the requests. The recent requests page allows the user to search information related to 311 requests.


How/if your final system helps to address the problem:
    Our final system failed to address the problem because the database lacks the data of longtitude and latitude and we do not have a free tool to convert the street names to their longtitude and latitude. If we are able to get the data, we can pass them through the Leaflet using .tilelayer and create a heat map of these locations.

Challenges faced and impact on final design:
    The biggest challenge we faced is to make a map with multiple markers using an unfamiliar library. Our group worked together to learn about this library and we figured out how it works ultimately. However, we lack the essential information to pass the longtitude and latitude to make the map. Another big challenge is to make our webpage look nice. To solve this problem, we browsed an open-source platform called CodePen and forked a nice UI pattern for the front-end.

Possible future work directions with this problem:
    In future, we need to find the data of longtitude and latitude or the way to convert street names to their longtitude and latitude. In addition, we will mark the locations of County Foreclosures and compare them with removal requests.