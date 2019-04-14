/*
Launch https://openweathermap.org/
Additional test-create account.
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

test.describe("OpenWeather-CreateAccount-AdditionalTest", function () { // eslint-disable-line func-names
    after(() => driver.quit()); // eslint-disable-line no-undef
    this.timeout(100000); // Suite-level timeout

    test.it("Launch OpenWeatherMap website, select signup link", () => {
        driver.get("https://openweathermap.org/");
        const title = driver.getTitle();
        driver.manage().window().maximize();
        driver.findElement(By.linkText('Sign Up')).click();
        assert(driver.findElement(By.css('.sign-form .first-child')).getText()).equalTo(expectedData.signUp.CreateNewAccountLabel);
    });

    test.it("Fill the form except captcha selection and click on create account button, verify error message", () => {
        driver.findElement(By.id('user_username')).sendKeys("test");
        driver.findElement(By.id('user_email')).sendKeys("test");
        driver.findElement(By.id('user_password')).sendKeys("test");
        driver.findElement(By.id('user_password_confirmation')).sendKeys("test");
        driver.findElement(By.id('agreement_is_age_confirmed')).click();
        driver.findElement(By.id('agreement_is_accepted')).click();
        driver.findElement(By.css('.btn-submit')).click();
        assert(driver.findElement(By.css('.help-block')).getText()).equalTo(expectedData.signUp.CaptchaErrorMesssage)  
    });
});