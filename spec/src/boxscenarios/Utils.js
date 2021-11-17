

const { By, until } = require('selenium-webdriver');


module.exports = {
    saveDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('save')), 5000);
        return await driver.findElement(By.id("save")).isEnabled() === false;
    },
    saveEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('save')), 5000);
        return await driver.findElement(By.id("save")).isEnabled();
    },
    givenLanguageDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('givenLanguage')), 5000);
        return await driver.findElement(By.id("givenLanguage")).isEnabled() === false;
    },
    wantedLanguageDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('wantedLanguage')), 5000);
        return await driver.findElement(By.id("wantedLanguage")).isEnabled() === false;
    },
    givenLanguageEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('givenLanguage')), 5000);
        return await driver.findElement(By.id("givenLanguage")).isEnabled();
    },
    wantedLanguageEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('wantedLanguage')), 5000);
        return await driver.findElement(By.id("wantedLanguage")).isEnabled();
    }
}
