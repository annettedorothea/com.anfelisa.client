/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("loginscenarios.LoginUnauthorized", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);

		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("loggedInUserIsNotSet", async () => {
		expect(appState.rootContainer.loggedInUser, "loggedInUserIsNotSet").toEqual(null)
	});
	it("usernameInLocalStorateWasNotSet", async () => {
		expect(appState.rootContainer.token, "usernameInLocalStorateWasNotSet").toEqual(undefined)
	});
	it("errorShown", async () => {
		expect(appState.rootContainer.messages, "errorShown").toEqual([
			{ 
				code : 401,
				text : `Unauthorized`,
				textKey : `loginFailed`,
				type : `error`,
				visible : true,
				id : 0
			}
		]
		)
	});
    
    
});





/******* S.D.G. *******/




