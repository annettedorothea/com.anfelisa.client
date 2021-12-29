/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/registrationscenarios/EmailChangedVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("registrationscenarios.EmailChanged", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
    	let appState;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);

		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.email = appState;
		appStates.emailValid = appState;
		
		verifications.registerEnabled = await Verifications.registerEnabled(driver, testId);
		
    });

	it("email", async () => {
		expect(appStates.email.rootContainer.mainView.registrationView.email, "email").toEqual(`info@anfelisa.de`)
	});
	it("emailValid", async () => {
		expect(appStates.emailValid.rootContainer.mainView.registrationView.emailInvalid, "emailValid").toEqual(false)
	});
	
	it("registerEnabled", async () => {
		expect(verifications.registerEnabled, "verifications.registerEnabled").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/



