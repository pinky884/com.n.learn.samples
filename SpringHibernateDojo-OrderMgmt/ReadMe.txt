This project uses following
1. Spring Mvc to load corresponding jsp's in UI
2. JSP files use dojo. Container.jsp is main page which does an include of dojo, app content, header and footer details.

Below is the requirement for UI
1. Container.jsp is main page which contains titlepanes for order search, customer search and item search.
2. Each of titlepanes contains text field and button to perform search
3. On click of search, a new tab is to be opened and user should be able to perform search for orders,customers,items based on some criteria.

Lib folder in the src code contains all the necessary jars and tomcat is used to deploy the app
App url - http://localhost:8001/SpringHibernateDojo-OrderMgmt/home.do