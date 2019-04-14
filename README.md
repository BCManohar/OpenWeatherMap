# OpenWeatherMap
**Introduction**: 
Created the scripts to cover below four workflow of Open Weather Map application using **mocha[BDD framework], selenium webdriverjs and mochawesome[Reporter]**.
1.	Validating navigator links in the homepage.
2.	Validating error message for invalid input search.
3.	Validating the weather report for the valid input search.
4. Verifying error message while creating the new account.

**Tutorial/Setup**: 
Modify package.json to include required dependencies : Navigate to src folder and open package.json , verify dependencies are included as mentioned below


"dependencies": { 
"selenium-webdriver": "^3.0.1", 
 "mocha": "^2.5.1", 
"mochawesome": "3.1.1" 
}

**Update scripts tag to include test** 

"scripts": {
 "test": "mocha --recursive src/funtional-tests/ --reporter mochawesome" 
},


**Folder Structure**: tests should reside under src/tests/functional-tests/

**Expected Data**: Create expected data file under src/tests/functional-tests/expected-data folder to validate with the UI data
**Constants Data**: Create contants required to pass in the scripts

**Commands to run tests**:
Execute the below commands under "OpenWeatherMap" directory 

**npm install**  
will deploy the node_modules with mocha(BDD), selenium webdriver and mochawesome(Reporter) 

**npm run test**
will run all three scripts parallely.
