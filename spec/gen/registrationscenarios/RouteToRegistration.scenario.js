/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/registrationscenarios/RouteToRegistrationVerifications");
const { Builder } = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

const testId = ScenarioUtils.generateTestId();

const driver = new Builder()
    .forBrowser('firefox')
    .build();
    
describe("RouteToRegistration", function () {
    beforeEach(async function () {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
    });
    afterEach(async function () {
        await driver.quit();
    });

    it("displayUsernameSpinner emailInvalid passwordMismatch email username password passwordRepetition registerDisabled", async function () {
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		const appState = await ScenarioUtils.getAppState(driver);
		expect(appState.rootContainer.mainView.displayUsernameSpinner, "displayUsernameSpinner").toEqual(false)
		expect(appState.rootContainer.mainView.emailInvalid, "emailInvalid").toEqual(false)
		expect(appState.rootContainer.mainView.emailInvalid, "passwordMismatch").toEqual(false)
		expect(appState.rootContainer.mainView.email, "email").toEqual(``)
		expect(appState.rootContainer.mainView.username, "username").toEqual(``)
		expect(appState.rootContainer.mainView.password, "password").toEqual(``)
		expect(appState.rootContainer.mainView.password, "passwordRepetition").toEqual(``)
		Verifications.registerDisabled(driver, testId);
	});
});





/******* S.D.G. *******/




