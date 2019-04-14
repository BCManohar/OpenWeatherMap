/*
Launch https://openweathermap.org/
Labels verification.
*/
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const test = require("selenium-webdriver/testing");
const assert = require("selenium-webdriver/testing/assert");

test.describe("OpenWeather-Label-Verifications-e2e-test1", function () { // eslint-disable-line func-names
    after(() => driver.quit()); // eslint-disable-line no-undef
    this.timeout(100000); // Suite-level timeout

    test.it("Launch OpenWeatherMap website, validate Signin and SignUp links", () => {
        driver.get("https://openweathermap.org/");
        const title = driver.getTitle();
        driver.manage().window().maximize();
        assert(driver.findElement(By.linkText('Sign In')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Sign Up')).isDisplayed()).isTrue();
    });

    test.it("Verify navigator menus are displayed", () => {
        assert(driver.findElement(By.linkText('Weather')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Maps')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Guide')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('API')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Price')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Partners')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Stations')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Widgets')).isDisplayed()).isTrue();
        assert(driver.findElement(By.linkText('Blog')).isDisplayed()).isTrue();
    });
});