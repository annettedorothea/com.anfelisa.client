/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("commonscenarios.Init", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
    	let appState;

		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.loggedInUser = appState;
		appStates.language = appState;
		appStates.messages = appState;
		appStates.username = appState;
		appStates.password = appState;
		appStates.saveInLocalStorage = appState;
		
		
    });

	it("loggedInUser", async () => {
		expect(appStates.loggedInUser.rootContainer.loggedInUser, "loggedInUser").toEqual(undefined)
	});
	it("language", async () => {
		expect(appStates.language.rootContainer.language, "language").toEqual(`de`)
	});
	it("messages", async () => {
		expect(appStates.messages.rootContainer.messages, "messages").toEqual([
		]
		)
	});
	it("username", async () => {
		expect(appStates.username.rootContainer.mainView.loginView.username, "username").toEqual(``)
	});
	it("password", async () => {
		expect(appStates.password.rootContainer.mainView.loginView.password, "password").toEqual(``)
	});
	it("saveInLocalStorage", async () => {
		expect(appStates.saveInLocalStorage.rootContainer.mainView.loginView.saveInLocalStorage, "saveInLocalStorage").toEqual(false)
	});
	

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




