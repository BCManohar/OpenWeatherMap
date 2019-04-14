/*
Launch https://openweathermap.org/
Enter valide city name, Verify Website should provide the cloud details of the city
*/
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const test = require("selenium-webdriver/testing");
const assert = require("selenium-webdriver/testing/assert");

const { constants } = require("./constants/openWeatherContants");

test.describe("OpenWeather-ValidCity-Successfull-e2e-test3", function () { // eslint-disable-line func-names
    after(() => driver.quit()); // eslint-disable-line no-undef
    this.timeout(100000); // Suite-level timeout

    test.it("Launch OpenWeatherMap website, enter invalid city, verify city name displayed", () => {
        driver.get("https://openweathermap.org/");
        driver.wait(until.elementLocated(By.css(`.search-cities__block > input`)));
        driver.manage().window().maximize();
        driver.findElement(By.css(`.search-cities__block > input`)).sendKeys(constants.cityName);
        driver.findElement(By.css(`[id=searchform] > button`)).click();
        driver.sleep(3000);
        assert(driver.findElement(By.linkText('Bangalore, IN')).isDisplayed()).isTrue();
    });
});