/*
Launch https://openweathermap.org/
Enter invalid city name, Verify Website should throw error message "Not found"
*/
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const test = require("selenium-webdriver/testing");
const assert = require("selenium-webdriver/testing/assert");

const { expectedData } = require("./expected-data/openWeatherExpectedData");

test.describe("OpenWeather-InvalidCity-error-Verification-e2e-test2", function () { // eslint-disable-line func-names
    after(() => driver.quit()); // eslint-disable-line no-undef
    this.timeout(100000); // Suite-level timeout

    test.it("Launch OpenWeatherMap website and enter invalid city", () => {
        driver.get("https://openweathermap.org/");
        driver.wait(until.elementLocated(By.css(`.search-cities__block > input`)));
        driver.manage().window().maximize();
        driver.findElement(By.css(`.search-cities__block > input`)).sendKeys("testSearch")
        driver.findElement(By.css(`[id=searchform] > button`)).click();
        driver.wait(until.elementLocated(By.css(`.alert-warning`)));
        const errorMessage = driver.findElement(By.xpath(`//div[contains(@class,"alert-warning")]`)).then((element) => {
            return element.getText().then((text) => {
                return text.trim().replace(/\n/g,"",'×').toString();
            });
        });    
       assert(errorMessage).equalTo(expectedData.Workflow2.ErroMessage);
    });
});