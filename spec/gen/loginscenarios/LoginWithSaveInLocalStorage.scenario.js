/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/loginscenarios/LoginWithSaveInLocalStorageVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("loginscenarios.LoginWithSaveInLocalStorage", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
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
		
		
		await ScenarioUtils.invokeAction(driver, LoginActionIds.toggleSaveInLocalStorage);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.saveInLocalStorageIsTrue1 = appState;
		
		
		await ScenarioUtils.invokeAction(driver, LoginActionIds.toggleSaveInLocalStorage);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.saveInLocalStorageIsFalse = appState;
		
		
		await ScenarioUtils.invokeAction(driver, LoginActionIds.toggleSaveInLocalStorage);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.saveInLocalStorageIsTrue2 = appState;
		
		
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.userLoggedIn = appState;
		appStates.tokenWasSet = appState;
		
		verifications.loginDataWasSetInLocalStorage = await Verifications.loginDataWasSetInLocalStorage(driver, testId);
		
    });

	it("username", async () => {
		expect(appStates.username.rootContainer.mainView.loginView.username, "username").toEqual(`username-${testId}`)
	});
	
	it("password", async () => {
		expect(appStates.password.rootContainer.mainView.loginView.password, "password").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	
	it("saveInLocalStorageIsTrue1", async () => {
		expect(appStates.saveInLocalStorageIsTrue1.rootContainer.mainView.loginView.saveInLocalStorage, "saveInLocalStorageIsTrue1").toEqual(true)
	});
	
	it("saveInLocalStorageIsFalse", async () => {
		expect(appStates.saveInLocalStorageIsFalse.rootContainer.mainView.loginView.saveInLocalStorage, "saveInLocalStorageIsFalse").toEqual(false)
	});
	
	it("saveInLocalStorageIsTrue2", async () => {
		expect(appStates.saveInLocalStorageIsTrue2.rootContainer.mainView.loginView.saveInLocalStorage, "saveInLocalStorageIsTrue2").toEqual(true)
	});
	
	it("userLoggedIn", async () => {
		expect(appStates.userLoggedIn.rootContainer.loggedInUser.username, "userLoggedIn").toEqual(`username-${testId}`)
	});
	it("tokenWasSet", async () => {
		expect(appStates.tokenWasSet.rootContainer.loggedInUser.token, "tokenWasSet").not.toEqual(null)
	});
	
	it("loginDataWasSetInLocalStorage", async () => {
		expect(verifications.loginDataWasSetInLocalStorage, "verifications.loginDataWasSetInLocalStorage").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




