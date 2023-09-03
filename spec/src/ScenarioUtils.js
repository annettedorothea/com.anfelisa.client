const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const {By, until, Key} = require('selenium-webdriver');

const CommonActionIds = require("../gen/actionIds/common/CommonActionIds");
const LoginActionIds = require("../gen/actionIds/login/LoginActionIds");
const RegistrationActionIds = require("../gen/actionIds/registration/RegistrationActionIds");
const BoxActionIds = require("../gen/actionIds/box/BoxActionIds");
const CategoryActionIds = require("../gen/actionIds/category/CategoryActionIds");
const CardActionIds = require("../gen/actionIds/card/CardActionIds");

const browserParam = process.env.SELENIUM_BROWSER;
const headless = process.env.HEADLESS;
const browser = browserParam ? browserParam : "chrome"

module.exports = {
    tearDown: async function (driver) {
        await driver.quit();
    },

    invokeAction: async function (driver, action, args) {
        if (CommonActionIds.init === action) {
            await driver.get('http://localhost:8080/');
            await driver.wait(until.elementLocated(By.xpath("//*[contains(@id,'dashboard') or (contains(@id,'username'))]")), 10000);
        } else if (CommonActionIds.routeToDefault === action) {
            await driver.get('http://localhost:8080/#');
            await this.waitInMillis(1000);
        } else if (CommonActionIds.routeToActiveCards === action) {
            await driver.get(`http://localhost:8080/#box/active-cards/${args[0]}`);
        } else if (CommonActionIds.routeToForgotPassword === action) {
            await driver.get('http://localhost:8080/#forgotpassword');
        } else if (CommonActionIds.routeToAuthorView === action) {
            await driver.get(`http://localhost:8080/#categories/${args[0]}`);
            await this.waitInMillis(1000);
        } else if (CommonActionIds.routeToBoxCreate === action) {
            await driver.get(`http://localhost:8080/#box/create`);
        } else if (CommonActionIds.routeToBoxSettings === action) {
            await driver.get(`http://localhost:8080/#box/settings/${args[0]}`);
        } else if (CommonActionIds.routeToPrivacyPolicy === action) {
            await driver.get(`http://localhost:8080/#privacypolicy`);
        } else if (CommonActionIds.routeToProfileView === action) {
            await driver.get(`http://localhost:8080/#profile`);
            await this.waitInMillis(1000);
        } else if (CommonActionIds.routeToQueryCards === action) {
            await driver.get(`http://localhost:8080/#box/${args[0]}`);
            await this.waitInMillis(1000);
        } else if (CommonActionIds.routeToRegistration === action) {
            await driver.get(`http://localhost:8080/#registration`);
        } else if (CommonActionIds.logout === action) {
            await click(driver, 'logout');
        } else if (CommonActionIds.destroyToast === action) {
            await click(driver, `toast_${args[0]}`);
        } else if (LoginActionIds.usernameChanged === action) {
            await waitClearSendKeys(driver, 'username', args[0]);
        } else if (LoginActionIds.passwordChanged === action) {
            await waitClearSendKeys(driver, 'password', args[0]);
        } else if (LoginActionIds.toggleSaveInLocalStorage === action) {
            await click(driver, 'saveInLocalStorage');
        } else if (LoginActionIds.login === action) {
            await click(driver, 'login');
            await driver.wait(until.elementLocated(By.xpath("//*[contains(@id,'dashboard') or (contains(@class,'error'))]")), 5000);
        } else if (RegistrationActionIds.usernameChanged === action) {
            await waitClearSendKeys(driver, 'username', args[0]);
        } else if (RegistrationActionIds.passwordChanged === action) {
            await waitClearSendKeys(driver, 'password', args[0]);
        } else if (RegistrationActionIds.passwordRepetitionChanged === action) {
            await waitClearSendKeys(driver, 'passwordRepetition', args[0]);
        } else if (RegistrationActionIds.emailChanged === action) {
            await waitClearSendKeys(driver, 'email', args[0]);
        } else if (RegistrationActionIds.registerUser === action) {
            await click(driver, 'register');
            await driver.wait(until.elementLocated(By.id('dashboard')), 5000);
        } else if (RegistrationActionIds.confirmEmail === action) {
            await driver.get(`http://localhost:8080/#confirmemail/${args[0]}/${args[1]}`);
            await this.waitInMillis(1000);
        } else if (BoxActionIds.categoryNameChanged === action) {
            await waitClearSendKeys(driver, 'categoryName', args[0]);
        } else if (BoxActionIds.maxCardsPerDayChanged === action) {
            await waitClearSendKeys(driver, 'maxCardsPerDay', args[0]);
        } else if (BoxActionIds.maxIntervalChanged === action) {
            await waitClearSendKeys(driver, 'maxInterval', args[0]);
        } else if (BoxActionIds.dictionaryLookupChanged === action) {
            await click(driver, 'dictionaryLookupEditCheckbox');
        } else if (BoxActionIds.givenLanguageChanged === action) {
            await driver.findElement(By.xpath(`//select[@id='givenLanguage']/option[@value='${args[0]}']`)).click();
        } else if (BoxActionIds.wantedLanguageChanged === action) {
            await driver.findElement(By.xpath(`//select[@id='wantedLanguage']/option[@value='${args[0]}']`)).click();
        } else if (BoxActionIds.createRootCategory === action) {
            await click(driver, 'save');
        } else if (CategoryActionIds.newCategoryClick === action) {
            await click(driver, 'new');
        } else if (CategoryActionIds.categoryNameChanged === action) {
            await waitClearSendKeys(driver, 'categoryName', args[0]);
        } else if (CategoryActionIds.createCategory === action) {
            await click(driver, 'ok');
        } else if (CardActionIds.givenOfNewCardChanged === action) {
            await waitClearSendKeys(driver, 'given', args[0]);
        } else if (CardActionIds.wantedOfNewCardChanged === action) {
            await waitClearSendKeys(driver, 'wanted', args[0]);
        } else if (CardActionIds.passValueToDictionary === action) {
            await waitClearSendKeys(driver, 'wanted', " ");
        } else if (CardActionIds.createCard === action) {
            await click(driver, 'create-card');
        } else if (CardActionIds.toggleAllScheduleCardSelection === action) {
            await click(driver, 'toggle-all');
        } else if (CardActionIds.scheduleSelectedCards === action) {
            await click(driver, 'schedule');
        } else if (BoxActionIds.boxClick === action) {
            await click(driver, args[0]);
        } else if (BoxActionIds.displayWanted === action) {
            await click(driver, "wanted");
        } else if (BoxActionIds.scoreCard === action) {
            await click(driver, `score_${args[0]}`);
        } else if (BoxActionIds.scoreReinforceCard === action) {
            await click(driver, `keep_${args[0]}`);
        } else {
            console.log(`action ${action} not defined`);
        }
    },

    waitInMillis: async function (millis) {
        return new Promise(function (resolve) {
            setTimeout(resolve, millis);
        });
    },

    getAppState: async function (driver) {
        return await driver.executeScript('return Anfelisa.getAppState()');
    },

    getValueFromLocalStorage: async function (driver, key) {
        return await driver.executeScript(`return Anfelisa.getValueFromLocalStorage('${key}')`);
    },

    generateTestId: function () {
        let d = new Date().getTime();
        return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    },

    addSquishyValueClient: async function (driver, value) {
        const jsonValue = JSON.stringify(value);
        await driver.executeScript(`Anfelisa.addSquishyValueClient('${jsonValue}')`);
    },

    addSquishyValueServer: async function (driver, uuid, key, value) {
        await driver.executeScript(`Anfelisa.addSquishyValueServer("${uuid}", "${key}", "${value}")`);
    },

    defaultTimeout: 30 * 1000,

    browserName: browser,
    //browserName: "chrome"
    //browserName: "safari" // execute: safaridriver --enable

    createDriver: function () {
        const options = new chrome.Options();
        if (headless) {
            options.addArguments("--headless");
        }
        return new Builder()
            .forBrowser(this.browserName)
            .setChromeOptions(options)
            .build();
    }

}

async function waitClearSendKeys(driver, id, value) {
    await driver.wait(until.elementLocated(By.id(id)), 5000);
    const element = await driver.findElement(By.id(id));
    if (!element) {
        console.error("element not found", id)
    }
    if (value.length === 0) {
        let text = await element.getAttribute("value")
        while (text.length > 0) {
            await driver.findElement(By.id(id)).sendKeys(Key.BACK_SPACE);
            text = await element.getAttribute("value")
        }
    } else {
        const element = await driver.findElement(By.id(id));
        await element.clear();
        if (browser === "firefox") {
            const valueAsString = value.toString();
            for (let i = 0; i < valueAsString.length; i++) {
                await element.sendKeys(valueAsString.charAt(i));
            }
        } else {
            await element.sendKeys(value);
        }
    }
}

async function click(driver, id) {
    const element = await driver.wait(until.elementLocated(By.id(id)), 5000);
    if (!element) {
        console.error("element not found", id)
    }
    await driver.findElement(By.id(id)).click();
}

async function clickByClass(driver, className) {
    await driver.wait(until.elementLocated(By.css(`.${className}`)), 5000);
    await driver.findElement(By.css(`.${className}`)).click();
}


/******* S.D.G. *******/




