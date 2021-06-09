/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/



const { By, until } = require('selenium-webdriver');

const CommonActionIds = require("../gen/actionIds/common/CommonActionIds");
const LoginActionIds = require("../gen/actionIds/login/LoginActionIds");
const RegistrationActionIds = require("../gen/actionIds/registration/RegistrationActionIds");
const BoxActionIds = require("../gen/actionIds/box/BoxActionIds");

module.exports = {
	tearDown: async function(driver) {
		await driver.quit();
	},

	invokeAction: async function(driver, action, args) {
		//console.log("invokeAction", action);
		if (CommonActionIds.init === action) {
			await driver.get('http://127.0.0.1:8888/');
			await driver.wait(until.elementLocated(By.xpath("//*[contains(@id,'dashboard') or (contains(@id,'username'))]")), 5000);
		}
		if (CommonActionIds.route === action) {
			if (args[0] === "#registration") {
				await click(driver, 'registration');
			} else if (args[0] === "#box/create") {
				await clickByClass(driver, 'box-create');
			} else if (args[0] === "#dashboard") {
				await click(driver, 'cancel');
				await this.waitInMillis(1000);
			}
		}
		if (CommonActionIds.logout === action) {
			await click(driver, 'logout');
		}
		if (CommonActionIds.hideToast === action) {
			await clickByClass(driver, 'toast');
		}

		if (LoginActionIds.usernameChanged === action) {
			await waitClearSendKeys(driver, 'username', args[0]);
		}
		if (LoginActionIds.passwordChanged === action) {
			await waitClearSendKeys(driver, 'password', args[0]);
		}
		if (LoginActionIds.toggleSaveInLocalStorage === action) {
			await click(driver, 'saveInLocalStorage');
		}
		if (LoginActionIds.login === action) {
			await click(driver, 'login');
			await driver.wait(until.elementLocated(By.xpath("//*[contains(@id,'dashboard') or (contains(@class,'error'))]")), 5000);
		}

		if (RegistrationActionIds.usernameChanged === action) {
			await waitClearSendKeys(driver, 'username', args[0]);
		}
		if (RegistrationActionIds.passwordChanged === action) {
			await waitClearSendKeys(driver, 'password', args[0]);
		}
		if (RegistrationActionIds.passwordRepetitionChanged === action) {
			await waitClearSendKeys(driver, 'passwordRepetition', args[0]);
		}
		if (RegistrationActionIds.emailChanged === action) {
			await waitClearSendKeys(driver, 'email', args[0]);
		}
		if (RegistrationActionIds.registerUser === action) {
			await click(driver, 'register');
			await driver.wait(until.elementLocated(By.id('dashboard')), 5000);
		}
		if (RegistrationActionIds.confirmEmail === action) {
			await driver.get(`http://127.0.0.1:8888/#confirmemail/${args[0]}/${args[1]}`);
			await this.waitInMillis(1000);
		}

		if (BoxActionIds.categoryNameChanged === action) {
			await waitClearSendKeys(driver, 'categoryName', args[0]);
		}
		if (BoxActionIds.maxCardsPerDayChanged === action) {
			await waitClearSendKeys(driver, 'maxCardsPerDay', args[0]);
		}
		if (BoxActionIds.maxIntervalChanged === action) {
			await waitClearSendKeys(driver, 'maxInterval', args[0]);
		}
		if (BoxActionIds.dictionaryLookupChanged === action) {
			await click(driver, 'dictionaryLookupEditCheckbox');
		}
		if (BoxActionIds.givenLanguageChanged === action) {
			await driver.findElement(By.xpath(`//select[@id='givenLanguage']/option[@value='${args[0]}']`)).click();
		}
		if (BoxActionIds.wantedLanguageChanged === action) {
			await driver.findElement(By.xpath(`//select[@id='wantedLanguage']/option[@value='${args[0]}']`)).click();
		}
		if (BoxActionIds.createRootCategory === action) {
			await click(driver, 'save');
			await driver.wait(until.elementLocated(By.css('.box')), 5000);
		}

	},

	waitInMillis: async function(millis) {
		return new Promise(function(resolve){
			setTimeout(resolve,millis);
		});
	},
	
	getAppState: async function(driver) {
		return await driver.executeScript('return Anfelisa.getAppState()');
	},

	getValueFromLocalStorage: async function(driver, key) {
		return await driver.executeScript(`return Anfelisa.getValueFromLocalStorage('${key}')`);
	},

	addNonDeterministicValueClient: async function(driver, value) {
		const jsonValue = JSON.stringify(value);
		await driver.executeScript(`Anfelisa.addNonDeterministicValueClient('${jsonValue}')`);
	},

	addNonDeterministicValueServer: async function(driver, uuid, key, value) {
		await driver.executeScript(`Anfelisa.addNonDeterministicValueServer("${uuid}", "${key}", "${value}")`);
	},

	generateTestId: function() {
	    let d = new Date().getTime();
	    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
	        let r = (d + Math.random() * 16) % 16 | 0;
	        d = Math.floor(d / 16);
	        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	    });
	},

	defaultTimeout: 30 * 1000,

	browserName: "firefox"

}

async function waitClearSendKeys(driver, id, value) {
	await driver.wait(until.elementLocated(By.id(id)), 5000);
	await driver.findElement(By.id(id)).clear();
	await driver.findElement(By.id(id)).sendKeys(value);
}

async function click(driver, id) {
	await driver.wait(until.elementLocated(By.id(id)), 5000);
	await driver.findElement(By.id(id)).click();
}

async function clickByClass(driver, className) {
	await driver.wait(until.elementLocated(By.css(`.${className}`)), 5000);
	await driver.findElement(By.css(`.${className}`)).click();
}



/******* S.D.G. *******/




