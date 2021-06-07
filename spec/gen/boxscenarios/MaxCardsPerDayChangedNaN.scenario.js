/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const BoxActionIds  = require("../../gen/actionIds/box/BoxActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/boxscenarios/MaxCardsPerDayChangedNaNVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("boxscenarios.MaxCardsPerDayChangedNaN", function () {
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
		await ScenarioUtils.addNonDeterministicValueClient(
			driver,
			{
				uuid: `uuid-${testId}`
			}
		);
		await ScenarioUtils.addNonDeterministicValueServer(driver, `uuid-${testId}`, "token", `${testId}-TOKEN`);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(1000);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#box/create`]);
		await ScenarioUtils.invokeAction(driver, BoxActionIds.categoryNameChanged, [`categoryName`]);

		await ScenarioUtils.invokeAction(driver, BoxActionIds.maxCardsPerDayChanged, [`xxx`]);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("maxCardsPerDay", async () => {
		expect(appState.rootContainer.mainView.maxCardsPerDay, "maxCardsPerDay").toEqual(`xxx`)
	});
	it("maxCardsPerDayInvalid", async () => {
		expect(appState.rootContainer.mainView.maxCardsPerDayInvalid, "maxCardsPerDayInvalid").toEqual(true)
	});
    
	it("saveDisabled", async () => {
		await Verifications.saveDisabled(driver, testId);
	});
    
});





/******* S.D.G. *******/




