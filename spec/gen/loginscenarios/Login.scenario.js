/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/loginscenarios/LoginVerifications");
const { Builder } = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

const testId = ScenarioUtils.generateTestId();

const driver = new Builder()
    .forBrowser('firefox')
    .build();
    
describe("Login", function () {
    beforeEach(async function () {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		nonDeterministicValues = JSON.parse(localStorage.getItem('nonDeterministicValues'));
		if (!nonDeterministicValues) {
			nonDeterministicValues = [];
		}
		nonDeterministicValue = {
			uuid: `uuid-${testId}`
		};
		nonDeterministicValues.push(nonDeterministicValue);
		AppUtils.httpPut(`/api/test/non-deterministic/value?uuid=uuid-${testId}&key=token&value=${testId}-TOKEN`);
		localStorage.setItem('nonDeterministicValues', JSON.stringify(nonDeterministicValues));
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(0);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.logout);
		await ScenarioUtils.waitInMillis(0);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
    });
    afterEach(async function () {
        await driver.quit();
    });

    it("userLoggedIn role loginDataWasNotSetInLocalStorage", async function () {
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);
		const appState = await ScenarioUtils.getAppState(driver);
		expect(appState.rootContainer.loggedInUser, "userLoggedIn").toEqual({ 
			password : `5f4dcc3b5aa765d61d8327deb882cf99`,
			username : `username-${testId}`
		}
		)
		expect(appState.rootContainer.role, "role").toEqual(`STUDENT`)
		Verifications.loginDataWasNotSetInLocalStorage(driver, testId);
	});
});





/******* S.D.G. *******/




