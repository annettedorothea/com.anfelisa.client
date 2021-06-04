/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/registrationscenarios/PasswordRepetitionChangedMismatchVerifications");
const { Builder } = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

const testId = ScenarioUtils.generateTestId();

const driver = new Builder()
    .forBrowser('firefox')
    .build();
    
describe("PasswordRepetitionChangedMismatch", function () {
    beforeEach(async function () {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
    });
    afterEach(async function () {
        await driver.quit();
    });

    it("password passwordRepetition passwordMismatch registerDisabled", async function () {
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		const appState = await ScenarioUtils.getAppState(driver);
		expect(appState.rootContainer.mainView.password, "password").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
		expect(appState.rootContainer.mainView.passwordRepetition, "passwordRepetition").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
		expect(appState.rootContainer.mainView.passwordMismatch, "passwordMismatch").toEqual(true)
		Verifications.registerDisabled(driver, testId);
	});
});





/******* S.D.G. *******/




