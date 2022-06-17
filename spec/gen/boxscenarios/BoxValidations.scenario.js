/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const LoginActionIds  = require("../../gen/actionIds/login/LoginActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const BoxActionIds  = require("../../gen/actionIds/box/BoxActionIds");
const Verifications = require("../../src/boxscenarios/BoxValidationsVerifications");

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("boxscenarios.BoxValidations", function () {
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
		await ScenarioUtils.invokeAction(driver, LoginActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.invokeAction(driver, LoginActionIds.login);

		await ScenarioUtils.invokeAction(driver, CommonActionIds.routeToBoxCreate);
		await ScenarioUtils.waitInMillis(10);
		
		await ScenarioUtils.invokeAction(driver, BoxActionIds.maxCardsPerDayChanged, [``]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.maxCardsPerDay1 = appState;
		appStates.maxCardsPerDayInvalid1 = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, BoxActionIds.maxCardsPerDayChanged, [`xxx`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.maxCardsPerDay2 = appState;
		appStates.maxCardsPerDayInvalid2 = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, BoxActionIds.maxCardsPerDayChanged, [`0`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.maxCardsPerDay = appState;
		appStates.maxCardsPerDayInvalid = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, BoxActionIds.maxIntervalChanged, [`NaN`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.maxInterval1 = appState;
		appStates.maxIntervalInvalid1 = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, BoxActionIds.maxIntervalChanged, [`0`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.maxInterval2 = appState;
		appStates.maxIntervalInvalid2 = appState;
		
		verifications.saveDisabled = await Verifications.saveDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, CommonActionIds.routeToDefault);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.boxList = appState;
		appStates.deleteBox = appState;
		
		
    });

	
	it("maxCardsPerDay1", async () => {
		expect(appStates.maxCardsPerDay1.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDay, "maxCardsPerDay1").toEqual(``)
	});
	it("maxCardsPerDayInvalid1", async () => {
		expect(appStates.maxCardsPerDayInvalid1.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDayInvalid, "maxCardsPerDayInvalid1").toEqual(true)
	});
	
	it("saveDisabled", async () => {
		expect(verifications.saveDisabled, "verifications.saveDisabled").toBeTrue();
	});
	it("maxCardsPerDay2", async () => {
		expect(appStates.maxCardsPerDay2.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDay, "maxCardsPerDay2").toEqual(`xxx`)
	});
	it("maxCardsPerDayInvalid2", async () => {
		expect(appStates.maxCardsPerDayInvalid2.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDayInvalid, "maxCardsPerDayInvalid2").toEqual(true)
	});
	
	it("saveDisabled", async () => {
		expect(verifications.saveDisabled, "verifications.saveDisabled").toBeTrue();
	});
	it("maxCardsPerDay", async () => {
		expect(appStates.maxCardsPerDay.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDay, "maxCardsPerDay").toEqual(`0`)
	});
	it("maxCardsPerDayInvalid", async () => {
		expect(appStates.maxCardsPerDayInvalid.rootContainer.mainView.boxSettingsView.boxSettings.maxCardsPerDayInvalid, "maxCardsPerDayInvalid").toEqual(true)
	});
	
	it("saveDisabled", async () => {
		expect(verifications.saveDisabled, "verifications.saveDisabled").toBeTrue();
	});
	it("maxInterval1", async () => {
		expect(appStates.maxInterval1.rootContainer.mainView.boxSettingsView.boxSettings.maxInterval, "maxInterval1").toEqual(`NaN`)
	});
	it("maxIntervalInvalid1", async () => {
		expect(appStates.maxIntervalInvalid1.rootContainer.mainView.boxSettingsView.boxSettings.maxIntervalInvalid, "maxIntervalInvalid1").toEqual(true)
	});
	
	it("saveDisabled", async () => {
		expect(verifications.saveDisabled, "verifications.saveDisabled").toBeTrue();
	});
	it("maxInterval2", async () => {
		expect(appStates.maxInterval2.rootContainer.mainView.boxSettingsView.boxSettings.maxInterval, "maxInterval2").toEqual(`0`)
	});
	it("maxIntervalInvalid2", async () => {
		expect(appStates.maxIntervalInvalid2.rootContainer.mainView.boxSettingsView.boxSettings.maxIntervalInvalid, "maxIntervalInvalid2").toEqual(true)
	});
	
	it("saveDisabled", async () => {
		expect(verifications.saveDisabled, "verifications.saveDisabled").toBeTrue();
	});
	it("boxList", async () => {
		expect(appStates.boxList.rootContainer.mainView.dashboardView.boxList, "boxList").toEqual([
		]
		)
	});
	it("deleteBox", async () => {
		expect(appStates.deleteBox.rootContainer.mainView.dashboardView.deleteBox, "deleteBox").toEqual({ 
			boxId : null
		}
		)
	});
	

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




