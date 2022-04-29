

const { By, until } = require('selenium-webdriver');


module.exports = {
    registerDisabled: async function(driver) {
        await driver.wait(until.elementLocated(By.id('register')), 5000);
        return await driver.findElement(By.id("register")).isEnabled() === false
    },
    registerEnabled: async function(driver) {
        await driver.wait(until.elementLocated(By.id('register')), 5000);
        return await driver.findElement(By.id("register")).isEnabled() === true
    },
    assertMessage: function(actual, expected) {
        return (actual.type === expected.type && actual.id === expected.id && actual.visible === expected.visible);
    },
}
