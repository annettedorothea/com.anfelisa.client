/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const BoxActionIds  = require("../../gen/actionIds/box/BoxActionIds");
const Verifications = require("../../src/boxscenarios/CreateRootCategoryWithDefaultVerifications");

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("boxscenarios.CreateRootCategoryWithDefault", function () {
    beforeAll(async function () {
    	driver = ScenarioUtils.createDriver();
    	let appState;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.routeToRegistration);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.waitInMillis(200);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		await ScenarioUtils.addSquishyValueClient(
			driver,
			{
				uuid: `uuid-${testId}`
			}
		);
		await ScenarioUtils.addSquishyValueServer(driver, `uuid-${testId}`, "token", `${testId}-TOKEN`);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(200);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.logout);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.destroyToast, [0]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);

		await ScenarioUtils.invokeAction(driver, CommonActionIds.routeToBoxCreate);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.allActiveCards = appState;
		appStates.allCards = appState;
		appStates.dictionaryLookup0 = appState;
		appStates.dictionaryLookupInvalid0 = appState;
		appStates.boxId = appState;
		appStates.categoryName0 = appState;
		appStates.categoryId = appState;
		appStates.givenLanguage = appState;
		appStates.maxCardsPerDay0 = appState;
		appStates.maxCardsPerDayInvalid0 = appState;
		appStates.maxInterval0 = appState;
		appStates.maxIntervalInvalid0 = appState;
		appStates.tooManyCardsStatus = appState;
		appStates.wantedLanguage = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		verifications.givenLanguageDisabled = await Verifications.givenLanguageDisabled(driver, testId);
		verifications.wantedLanguageDisabled = await Verifications.wantedLanguageDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, BoxActionIds.categoryNameChanged, [`category`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.categoryName = appState;
		
		verifications.saveEnabled = await Verifications.saveEnabled(driver, testId);
		
		await ScenarioUtils.addSquishyValueClient(
			driver,
			{
				uuid: `box-${testId}`
			}
		);
		await ScenarioUtils.invokeAction(driver, BoxActionIds.createRootCategory);
		await ScenarioUtils.waitInMillis(10);
		await ScenarioUtils.waitInMillis(500);
		
		appState = await ScenarioUtils.getAppState(driver);
		
		
    });

	it("allActiveCards", async () => {
		expect(appStates.allActiveCards.rootContainer.mainView.boxSettingsView.boxSettings.allActiveCards, "allActiveCards").toEqual(undefined)
	});
	it("allCards", async () => {
		expect(appStates.allCards.rootContainer.mainView.boxSettingsView.boxSettings.allCards, "allCards").toEqual(undefined)
	});
	it("dictionaryLookup0", async () => {
		expect(appStates.dictionaryLookup0.rootContainer.mainView.boxSettingsView.boxSettings.dictionaryLookup, "dictionaryLookup0").toEqual(false)
	});
	it("dictionaryLookupInvalid0", async () => {
		expect(appStates.dictionaryLookupInvalid0.rootContainer.mainView.boxSettingsView.boxSettings.dictionaryLookupInvalid, "dictionaryLookupInvalid0").toEqual(undefined)
	});
	it("boxId", async () => {
		expect(appStates.boxId.rootContainer.mainView.boxSettingsView.boxSettings.boxId, "boxId").toEqual(``)
	});
	it("categoryName0", async () => {
		expect(appStates.categoryName0.rootContainer.mainView.boxSettingsView.boxSettings.categoryName, "categoryName0").toEqual(``)
	});
	it("categoryId", async () => {
		expect(appStates.categoryId.rootContainer.mainView.boxSettingsView.boxSettings.categoryId, "categoryId").toEqual(undefined)
	});
	it("givenLanguage", async () => {
		expect(appStates.givenLanguage.rootContainer.mainView.boxSettingsView.boxSettings.givenLanguage, "givenLanguage").toEqual(``)
	});
	it("maxCardsPerDay0", async () => {
		expect(appStates.maxCardsPerDay0.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDay, "maxCardsPerDay0").toEqual(8)
	});
	it("maxCardsPerDayInvalid0", async () => {
		expect(appStates.maxCardsPerDayInvalid0.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDayInvalid, "maxCardsPerDayInvalid0").toEqual(undefined)
	});
	it("maxInterval0", async () => {
		expect(appStates.maxInterval0.rootContainer.mainView.boxSettingsView.boxSettings.maxInterval, "maxInterval0").toEqual(``)
	});
	it("maxIntervalInvalid0", async () => {
		expect(appStates.maxIntervalInvalid0.rootContainer.mainView.boxSettingsView.boxSettings.maxIntervalInvalid, "maxIntervalInvalid0").toEqual(undefined)
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
	it("categoryName", async () => {
		expect(appStates.categoryName.rootContainer.mainView.boxSettingsView.boxSettings.categoryName, "categoryName").toEqual(`category`)
	});
	
	it("saveEnabled", async () => {
		expect(verifications.saveEnabled, "verifications.saveEnabled").toBeTrue();
	});
	

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




