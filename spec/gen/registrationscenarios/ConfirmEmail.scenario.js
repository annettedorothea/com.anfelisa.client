/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("registrationscenarios.ConfirmEmail", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		await ScenarioUtils.addSquishyValueClient(
			driver,
			{
				uuid: `uuid-${testId}`
			}
		);
		await ScenarioUtils.addSquishyValueServer(driver, `uuid-${testId}`, "token", `${testId}-TOKEN`);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(1000);

		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.confirmEmail, [`username-${testId}`,`${testId}-TOKEN`]);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("confirmsEmail", async () => {
		expect(appState.rootContainer.messages, "confirmsEmail").toEqual([
			{ 
				textKey : `confirmEmail`,
				type : `info`,
				visible : true,
				id : 0
			},
			{ 
				textKey : `emailConfirmed`,
				type : `info`,
				visible : true,
				id : 1
			}
		]
		)
	});
	it("userLoggedIn", async () => {
		expect(appState.rootContainer.loggedInUser.username, "userLoggedIn").toEqual(`username-${testId}`)
	});
	it("tokenWasSet", async () => {
		expect(appState.rootContainer.loggedInUser.token, "tokenWasSet").not.toEqual(null)
	});
    
    
});





/******* S.D.G. *******/




