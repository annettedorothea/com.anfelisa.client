/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/loginscenarios/LoginVerifications");

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("loginscenarios.Login", function () {
    beforeAll(async function () {
    	driver = ScenarioUtils.createDriver();
    	let appState;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.waitInMillis(200);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		await ScenarioUtils.addSquishyValueClient(
			driver,
			{
				uuid: `uuid-${testId}`
			}
		);
		await ScenarioUtils.addSquishyValueServer(driver, `uuid-${testId}`, "token", `${testId}-TOKEN`);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(200);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.logout);

		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.username = appState;
		
		
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password = appState;
		
		
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.userLoggedIn = appState;
		appStates.tokenWasSet = appState;
		
		verifications.loginDataWasNotSetInLocalStorage = await Verifications.loginDataWasNotSetInLocalStorage(driver, testId);
		
    });

	it("username", async () => {
		expect(appStates.username.rootContainer.mainView.loginView.username.value, "username").toEqual(`username-${testId}`)
	});
	
	it("password", async () => {
		expect(appStates.password.rootContainer.mainView.loginView.password.value, "password").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	
	it("userLoggedIn", async () => {
		expect(appStates.userLoggedIn.rootContainer.loggedInUser.username, "userLoggedIn").toEqual(`username-${testId}`)
	});
	it("tokenWasSet", async () => {
		expect(appStates.tokenWasSet.rootContainer.loggedInUser.token, "tokenWasSet").not.toEqual(null)
	});
	
	it("loginDataWasNotSetInLocalStorage", async () => {
		expect(verifications.loginDataWasNotSetInLocalStorage, "verifications.loginDataWasNotSetInLocalStorage").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




