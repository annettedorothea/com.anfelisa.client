/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/commonscenarios/HideToastVerifications");

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("commonscenarios.HideToast", function () {
    beforeAll(async function () {
    	driver = ScenarioUtils.createDriver();
    	let appState;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);

		await ScenarioUtils.waitInMillis(5000);
		
		appState = await ScenarioUtils.getAppState(driver);
		
		verifications.errorWasHidden = await Verifications.errorWasHidden(appState.rootContainer.messageContainer.messages);
		
    });

	
	it("errorWasHidden", async () => {
		expect(verifications.errorWasHidden, "verifications.errorWasHidden").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




