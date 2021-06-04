/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const { Builder } = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

const testId = ScenarioUtils.generateTestId();

const driver = new Builder()
    .forBrowser('firefox')
    .build();
    
describe("DestroyToast", function () {
    beforeEach(async function () {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);
    });
    afterEach(async function () {
        await driver.quit();
    });

    it("errorDestroyed ", async function () {
		await ScenarioUtils.waitInMillis(8000);
		const appState = await ScenarioUtils.getAppState(driver);
		expect(appState.rootContainer.messages, "errorDestroyed").toEqual([
		]
		)
	});
});





/******* S.D.G. *******/



