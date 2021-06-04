/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/registrationscenarios/EmailChangedVerifications");
const { Builder } = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

const testId = ScenarioUtils.generateTestId();

const driver = new Builder()
    .forBrowser('firefox')
    .build();
    
describe("EmailChanged", function () {
    beforeEach(async function () {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
    });
    afterEach(async function () {
        await driver.quit();
    });

    it("email emailValid registerEnabled", async function () {
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		const appState = await ScenarioUtils.getAppState(driver);
		expect(appState.rootContainer.mainView.email, "email").toEqual(`info@anfelisa.de`)
		expect(appState.rootContainer.mainView.emailInvalid, "emailValid").toEqual(false)
		Verifications.registerEnabled(driver, testId);
	});
});





/******* S.D.G. *******/



