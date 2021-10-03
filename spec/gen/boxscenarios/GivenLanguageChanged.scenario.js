/********************************************************************************
 * generated by de.acegen 1.5.4
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const BoxActionIds  = require("../../gen/actionIds/box/BoxActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/boxscenarios/GivenLanguageChangedVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("boxscenarios.GivenLanguageChanged", function () {
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
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#box/create`]);
		await ScenarioUtils.invokeAction(driver, BoxActionIds.categoryNameChanged, [`categoryName`]);
		await ScenarioUtils.invokeAction(driver, BoxActionIds.dictionaryLookupChanged);

		await ScenarioUtils.invokeAction(driver, BoxActionIds.givenLanguageChanged, [`de`]);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("dictionaryLookup", async () => {
		expect(appState.rootContainer.mainView.boxSettings.dictionaryLookup, "dictionaryLookup").toEqual(true)
	});
	it("dictionaryLookupInvalid", async () => {
		expect(appState.rootContainer.mainView.boxSettings.dictionaryLookupInvalid, "dictionaryLookupInvalid").toEqual(true)
	});
	it("givenLanguage", async () => {
		expect(appState.rootContainer.mainView.boxSettings.givenLanguage, "givenLanguage").toEqual(`de`)
	});
	it("wantedLanguage", async () => {
		expect(appState.rootContainer.mainView.boxSettings.wantedLanguage, "wantedLanguage").toEqual(``)
	});
    
	it("saveDisabled", async () => {
		await Verifications.saveDisabled(driver, testId);
	});
	it("givenLanguageEnabled", async () => {
		await Verifications.givenLanguageEnabled(driver, testId);
	});
	it("wantedLanguageEnabled", async () => {
		await Verifications.wantedLanguageEnabled(driver, testId);
	});
    
});





/******* S.D.G. *******/




