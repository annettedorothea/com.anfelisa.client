/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const BoxActionIds  = require("../../gen/actionIds/box/BoxActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("boxscenarios.CreateRootCategory", function () {
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
		await ScenarioUtils.invokeAction(driver, BoxActionIds.givenLanguageChanged, [`de`]);
		await ScenarioUtils.invokeAction(driver, BoxActionIds.wantedLanguageChanged, [`en`]);

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
		appStates.boxList = appState;
		appStates.deleteBox = appState;
		
		
    });

	it("boxList", async () => {
		expect(appStates.boxList.rootContainer.mainView.dashboardView.boxList, "boxList").toEqual([
			{ 
				boxId : `box-${testId}`,
				categoryId : `box-${testId}`,
				categoryName : `categoryName`,
				countsPerDayNextWeek : [
					0,0,0,0,0,0,0
				],
				
				maxCardsPerDay : 8,
				openTodaysCards : 0,
				quality0Count : 0,
				quality1Count : 0,
				quality2Count : 0,
				quality3Count : 0,
				quality4Count : 0,
				quality5Count : 0,
				categoryAuthor : `username-${testId}`,
				reverse : false,
				editable : true,
				archived : false,
				shared : false
			}
		]
		)
	});
	it("deleteBox", async () => {
		expect(appStates.deleteBox.rootContainer.mainView.dashboardView.deleteBox, "deleteBox").toEqual({ 
			confirmDelete : false,
			boxId : null
		}
		)
	});
	

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




