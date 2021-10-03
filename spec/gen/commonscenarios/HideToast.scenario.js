/********************************************************************************
 * generated by de.acegen 1.5.6
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("commonscenarios.HideToast", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);

		await ScenarioUtils.waitInMillis(5000);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("errorHidden", async () => {
		expect(appState.rootContainer.messages, "errorHidden").toEqual([
			{ 
				code : 401,
				text : `Unauthorized`,
				textKey : `loginFailed`,
				type : `error`,
				visible : false,
				id : 0
			}
		]
		)
	});
    
    
});





/******* S.D.G. *******/




