/********************************************************************************
 * generated by de.acegen 1.6.5
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/boxscenarios/RouteToBoxCreateVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("boxscenarios.RouteToBoxCreate", function () {
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
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.allActiveCards = appState;
		appStates.allCards = appState;
		appStates.dictionaryLookup = appState;
		appStates.dictionaryLookupInvalid = appState;
		appStates.boxId = appState;
		appStates.categoryName = appState;
		appStates.categoryId = appState;
		appStates.givenLanguage = appState;
		appStates.maxCardsPerDay = appState;
		appStates.maxCardsPerDayInvalid = appState;
		appStates.maxInterval = appState;
		appStates.maxIntervalInvalid = appState;
		appStates.shared = appState;
		appStates.tooManyCardsStatus = appState;
		appStates.wantedLanguage = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		verifications.givenLanguageDisabled = await Verifications.givenLanguageDisabled(driver, testId);
		verifications.wantedLanguageDisabled = await Verifications.wantedLanguageDisabled(driver, testId);
		
    });

	it("allActiveCards", async () => {
		expect(appStates.allActiveCards.rootContainer.mainView.boxSettingsView.boxSettings.allActiveCards, "allActiveCards").toEqual(undefined)
	});
	it("allCards", async () => {
		expect(appStates.allCards.rootContainer.mainView.boxSettingsView.boxSettings.allCards, "allCards").toEqual(undefined)
	});
	it("dictionaryLookup", async () => {
		expect(appStates.dictionaryLookup.rootContainer.mainView.boxSettingsView.boxSettings.dictionaryLookup, "dictionaryLookup").toEqual(false)
	});
	it("dictionaryLookupInvalid", async () => {
		expect(appStates.dictionaryLookupInvalid.rootContainer.mainView.boxSettingsView.boxSettings.dictionaryLookupInvalid, "dictionaryLookupInvalid").toEqual(undefined)
	});
	it("boxId", async () => {
		expect(appStates.boxId.rootContainer.mainView.boxSettingsView.boxSettings.boxId, "boxId").toEqual(``)
	});
	it("categoryName", async () => {
		expect(appStates.categoryName.rootContainer.mainView.boxSettingsView.boxSettings.categoryName, "categoryName").toEqual(``)
	});
	it("categoryId", async () => {
		expect(appStates.categoryId.rootContainer.mainView.boxSettingsView.boxSettings.categoryId, "categoryId").toEqual(undefined)
	});
	it("givenLanguage", async () => {
		expect(appStates.givenLanguage.rootContainer.mainView.boxSettingsView.boxSettings.givenLanguage, "givenLanguage").toEqual(``)
	});
	it("maxCardsPerDay", async () => {
		expect(appStates.maxCardsPerDay.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDay, "maxCardsPerDay").toEqual(8)
	});
	it("maxCardsPerDayInvalid", async () => {
		expect(appStates.maxCardsPerDayInvalid.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDayInvalid, "maxCardsPerDayInvalid").toEqual(undefined)
	});
	it("maxInterval", async () => {
		expect(appStates.maxInterval.rootContainer.mainView.boxSettingsView.boxSettings.maxInterval, "maxInterval").toEqual(``)
	});
	it("maxIntervalInvalid", async () => {
		expect(appStates.maxIntervalInvalid.rootContainer.mainView.boxSettingsView.boxSettings.maxIntervalInvalid, "maxIntervalInvalid").toEqual(undefined)
	});
	it("shared", async () => {
		expect(appStates.shared.rootContainer.mainView.boxSettingsView.boxSettings.shared, "shared").toEqual(undefined)
	});
	it("tooManyCardsStatus", async () => {
		expect(appStates.tooManyCardsStatus.rootContainer.mainView.boxSettingsView.boxSettings.tooManyCardsStatus, "tooManyCardsStatus").toEqual(undefined)
	});
	it("wantedLanguage", async () => {
		expect(appStates.wantedLanguage.rootContainer.mainView.boxSettingsView.boxSettings.wantedLanguage, "wantedLanguage").toEqual(``)
	});
	
	it("saveDisabled", async () => {
		expect(verifications.saveDisabled, "verifications.saveDisabled").toBeTrue();
	});
	it("givenLanguageDisabled", async () => {
		expect(verifications.givenLanguageDisabled, "verifications.givenLanguageDisabled").toBeTrue();
	});
	it("wantedLanguageDisabled", async () => {
		expect(verifications.wantedLanguageDisabled, "verifications.wantedLanguageDisabled").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




