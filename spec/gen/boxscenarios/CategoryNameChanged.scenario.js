/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const BoxActionIds  = require("../../gen/actionIds/box/BoxActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/boxscenarios/CategoryNameChangedVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("boxscenarios.CategoryNameChanged", function () {
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
		await ScenarioUtils.addSquishyValueClient(
			driver,
			{
				uuid: `uuid-${testId}`
			}
		);
		await ScenarioUtils.addSquishyValueServer(driver, `uuid-${testId}`, "token", `${testId}-TOKEN`);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(1000);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#box/create`]);

		await ScenarioUtils.invokeAction(driver, BoxActionIds.categoryNameChanged, [`categoryName`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.categoryName = appState;
		
		verifications.saveEnabled = await Verifications.saveEnabled(driver, testId);
		
    });

	it("categoryName", async () => {
		expect(appStates.categoryName.rootContainer.mainView.boxSettingsView.boxSettings.categoryName, "categoryName").toEqual(`categoryName`)
	});
	
	it("saveEnabled", async () => {
		expect(verifications.saveEnabled, "verifications.saveEnabled").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




