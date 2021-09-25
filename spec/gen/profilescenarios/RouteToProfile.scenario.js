/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("profilescenarios.RouteToProfile", function () {
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
		await ScenarioUtils.invokeAction(driver, CommonActionIds.logout);
		await ScenarioUtils.waitInMillis(1000);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);

		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#profile`]);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("username", async () => {
		expect(appState.rootContainer.mainView.username, "username").toEqual(`username-${testId}`)
	});
	it("email", async () => {
		expect(appState.rootContainer.mainView.email, "email").toEqual(`info@anfelisa.de`)
	});
    
    
});





/******* S.D.G. *******/




