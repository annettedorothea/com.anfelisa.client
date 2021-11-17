/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const BoxActionIds  = require("../../gen/actionIds/box/BoxActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/boxscenarios/DictionaryLookupChangedVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("boxscenarios.DictionaryLookupChanged", function () {
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

		await ScenarioUtils.invokeAction(driver, BoxActionIds.dictionaryLookupChanged);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.dictionaryLookup = appState;
		appStates.dictionaryLookupInvalid = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		verifications.givenLanguageEnabled = await Verifications.givenLanguageEnabled(driver, testId);
		verifications.wantedLanguageEnabled = await Verifications.wantedLanguageEnabled(driver, testId);
		
    });

	it("dictionaryLookup", async () => {
		expect(appStates.dictionaryLookup.rootContainer.mainView.boxSettingsView.boxSettings.dictionaryLookup, "dictionaryLookup").toEqual(true)
	});
	it("dictionaryLookupInvalid", async () => {
		expect(appStates.dictionaryLookupInvalid.rootContainer.mainView.boxSettingsView.boxSettings.dictionaryLookupInvalid, "dictionaryLookupInvalid").toEqual(true)
	});
	
	it("saveDisabled", async () => {
		expect(verifications.saveDisabled, "verifications.saveDisabled").toBeTrue();
	});
	it("givenLanguageEnabled", async () => {
		expect(verifications.givenLanguageEnabled, "verifications.givenLanguageEnabled").toBeTrue();
	});
	it("wantedLanguageEnabled", async () => {
		expect(verifications.wantedLanguageEnabled, "verifications.wantedLanguageEnabled").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




