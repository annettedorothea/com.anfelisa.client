/********************************************************************************
 * generated by de.acegen 1.6.0
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("loginscenarios.ToggleSaveInLocalStorage", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);

		await ScenarioUtils.invokeAction(driver, LoginActionIds.toggleSaveInLocalStorage);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("saveInLocalStorageIsTrue", async () => {
		expect(appState.rootContainer.mainView.loginView.saveInLocalStorage, "saveInLocalStorageIsTrue").toEqual(true)
	});
    
    
});





/******* S.D.G. *******/




