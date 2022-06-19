/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/registrationscenarios/RegistrationHappyPathVerifications");

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("registrationscenarios.RegistrationHappyPath", function () {
    beforeAll(async function () {
    	driver = ScenarioUtils.createDriver();
    	let appState;
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);

		await ScenarioUtils.invokeAction(driver, CommonActionIds.routeToRegistration);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.displayUsernameSpinner = appState;
		appStates.emailInvalid = appState;
		appStates.initialEmail = appState;
		appStates.initialUsername = appState;
		appStates.initialPassword = appState;
		appStates.initialPasswordRepetition = appState;
		appStates.passwordRepetitionMismatch = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.waitInMillis(10);
		await ScenarioUtils.waitInMillis(200);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.username = appState;
		appStates.usernameAvailable = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password = appState;
		appStates.passwordRepetition = appState;
		appStates.passwordRepetitionMismatch2 = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password2 = appState;
		appStates.passwordRepetition2 = appState;
		appStates.passwordRepetitionMatch = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.email = appState;
		appStates.emailValid = appState;
		
		verifications.registerEnabled = await Verifications.registerEnabled(driver, testId);
		
		await ScenarioUtils.addSquishyValueClient(
			driver,
			{
				uuid: `uuid-${testId}`
			}
		);
		await ScenarioUtils.addSquishyValueServer(driver, `uuid-${testId}`, "token", `${testId}-TOKEN`);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(10);
		await ScenarioUtils.waitInMillis(200);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.autoUserLoggedIn = appState;
		appStates.autoTokenWasSet = appState;
		
		verifications.loginDataWasNotSetInLocalStorage = await Verifications.loginDataWasNotSetInLocalStorage(driver, testId);
		verifications.infoShown = await Verifications.infoShown(appState.rootContainer.messageContainer.messages);
		
		await ScenarioUtils.invokeAction(driver, CommonActionIds.logout);
		await ScenarioUtils.waitInMillis(10);
		
    });

	it("displayUsernameSpinner", async () => {
		expect(appStates.displayUsernameSpinner.rootContainer.mainView.registrationView.username.displayUsernameSpinner, "displayUsernameSpinner").toEqual(false)
	});
	it("emailInvalid", async () => {
		expect(appStates.emailInvalid.rootContainer.mainView.registrationView.email.emailInvalid, "emailInvalid").toEqual(false)
	});
	it("initialEmail", async () => {
		expect(appStates.initialEmail.rootContainer.mainView.registrationView.email.value, "initialEmail").toEqual(``)
	});
	it("initialUsername", async () => {
		expect(appStates.initialUsername.rootContainer.mainView.registrationView.username.value, "initialUsername").toEqual(``)
	});
	it("initialPassword", async () => {
		expect(appStates.initialPassword.rootContainer.mainView.registrationView.password.value, "initialPassword").toEqual(``)
	});
	it("initialPasswordRepetition", async () => {
		expect(appStates.initialPasswordRepetition.rootContainer.mainView.registrationView.passwordRepetition.value, "initialPasswordRepetition").toEqual(``)
	});
	it("passwordRepetitionMismatch", async () => {
		expect(appStates.passwordRepetitionMismatch.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordRepetitionMismatch").toEqual(false)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("username", async () => {
		expect(appStates.username.rootContainer.mainView.registrationView.username.value, "username").toEqual(`username-${testId}`)
	});
	it("usernameAvailable", async () => {
		expect(appStates.usernameAvailable.rootContainer.mainView.registrationView.username.available, "usernameAvailable").toEqual(true)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("password", async () => {
		expect(appStates.password.rootContainer.mainView.registrationView.password.value, "password").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordRepetition", async () => {
		expect(appStates.passwordRepetition.rootContainer.mainView.registrationView.passwordRepetition.value, "passwordRepetition").toEqual(``)
	});
	it("passwordRepetitionMismatch2", async () => {
		expect(appStates.passwordRepetitionMismatch2.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordRepetitionMismatch2").toEqual(true)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("password2", async () => {
		expect(appStates.password2.rootContainer.mainView.registrationView.password.value, "password2").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordRepetition2", async () => {
		expect(appStates.passwordRepetition2.rootContainer.mainView.registrationView.passwordRepetition.value, "passwordRepetition2").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordRepetitionMatch", async () => {
		expect(appStates.passwordRepetitionMatch.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordRepetitionMatch").toEqual(false)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("email", async () => {
		expect(appStates.email.rootContainer.mainView.registrationView.email.value, "email").toEqual(`info@anfelisa.de`)
	});
	it("emailValid", async () => {
		expect(appStates.emailValid.rootContainer.mainView.registrationView.email.emailInvalid, "emailValid").toEqual(false)
	});
	
	it("registerEnabled", async () => {
		expect(verifications.registerEnabled, "verifications.registerEnabled").toBeTrue();
	});
	it("autoUserLoggedIn", async () => {
		expect(appStates.autoUserLoggedIn.rootContainer.loggedInUser.username, "autoUserLoggedIn").toEqual(`username-${testId}`)
	});
	it("autoTokenWasSet", async () => {
		expect(appStates.autoTokenWasSet.rootContainer.loggedInUser.token, "autoTokenWasSet").not.toEqual(null)
	});
	
	it("loginDataWasNotSetInLocalStorage", async () => {
		expect(verifications.loginDataWasNotSetInLocalStorage, "verifications.loginDataWasNotSetInLocalStorage").toBeTrue();
	});
	it("infoShown", async () => {
		expect(verifications.infoShown, "verifications.infoShown").toBeTrue();
	});
	

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/




