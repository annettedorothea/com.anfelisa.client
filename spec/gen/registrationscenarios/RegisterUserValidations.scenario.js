/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const Verifications = require("../../src/registrationscenarios/RegisterUserValidationsVerifications");

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appStates = {};
let verifications = {};
    
describe("registrationscenarios.RegisterUserValidations", function () {
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

		await ScenarioUtils.invokeAction(driver, CommonActionIds.routeToRegistration);
		await ScenarioUtils.waitInMillis(10);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.waitInMillis(10);
		await ScenarioUtils.waitInMillis(200);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.username1 = appState;
		appStates.usernameNotAvailable1 = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password1 = appState;
		appStates.passwordMismatch1 = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password2 = appState;
		appStates.passwordRepetition2 = appState;
		appStates.passwordMismatch2 = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`pas`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password3 = appState;
		appStates.passwordRepetition3 = appState;
		appStates.passwordMatch3 = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password4 = appState;
		appStates.passwordRepetition4 = appState;
		appStates.passwordMismatch4 = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.password5 = appState;
		appStates.passwordRepetition5 = appState;
		appStates.passwordMatch5 = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`email`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.email = appState;
		appStates.emailInvalid = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		await ScenarioUtils.waitInMillis(10);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.emailOk = appState;
		appStates.emailValid = appState;
		
		verifications.registerDisabled = await Verifications.registerDisabled(driver, testId);
		
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`other-${testId}`]);
		await ScenarioUtils.waitInMillis(10);
		await ScenarioUtils.waitInMillis(200);
		
		appState = await ScenarioUtils.getAppState(driver);
		appStates.username = appState;
		appStates.usernameAvailable = appState;
		
		verifications.registerEnabled = await Verifications.registerEnabled(driver, testId);
		
    });

	
	it("username1", async () => {
		expect(appStates.username1.rootContainer.mainView.registrationView.username.value, "username1").toEqual(`username-${testId}`)
	});
	it("usernameNotAvailable1", async () => {
		expect(appStates.usernameNotAvailable1.rootContainer.mainView.registrationView.username.available, "usernameNotAvailable1").toEqual(false)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("password1", async () => {
		expect(appStates.password1.rootContainer.mainView.registrationView.password.value, "password1").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
	});
	it("passwordMismatch1", async () => {
		expect(appStates.passwordMismatch1.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordMismatch1").toEqual(true)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("password2", async () => {
		expect(appStates.password2.rootContainer.mainView.registrationView.password.value, "password2").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
	});
	it("passwordRepetition2", async () => {
		expect(appStates.passwordRepetition2.rootContainer.mainView.registrationView.passwordRepetition.value, "passwordRepetition2").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordMismatch2", async () => {
		expect(appStates.passwordMismatch2.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordMismatch2").toEqual(true)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("password3", async () => {
		expect(appStates.password3.rootContainer.mainView.registrationView.password.value, "password3").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
	});
	it("passwordRepetition3", async () => {
		expect(appStates.passwordRepetition3.rootContainer.mainView.registrationView.passwordRepetition.value, "passwordRepetition3").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
	});
	it("passwordMatch3", async () => {
		expect(appStates.passwordMatch3.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordMatch3").toEqual(false)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("password4", async () => {
		expect(appStates.password4.rootContainer.mainView.registrationView.password.value, "password4").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
	});
	it("passwordRepetition4", async () => {
		expect(appStates.passwordRepetition4.rootContainer.mainView.registrationView.passwordRepetition.value, "passwordRepetition4").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordMismatch4", async () => {
		expect(appStates.passwordMismatch4.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordMismatch4").toEqual(true)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("password5", async () => {
		expect(appStates.password5.rootContainer.mainView.registrationView.password.value, "password5").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordRepetition5", async () => {
		expect(appStates.passwordRepetition5.rootContainer.mainView.registrationView.passwordRepetition.value, "passwordRepetition5").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordMatch5", async () => {
		expect(appStates.passwordMatch5.rootContainer.mainView.registrationView.passwordRepetition.passwordMismatch, "passwordMatch5").toEqual(false)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("email", async () => {
		expect(appStates.email.rootContainer.mainView.registrationView.email.value, "email").toEqual(`email`)
	});
	it("emailInvalid", async () => {
		expect(appStates.emailInvalid.rootContainer.mainView.registrationView.email.emailInvalid, "emailInvalid").toEqual(true)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("emailOk", async () => {
		expect(appStates.emailOk.rootContainer.mainView.registrationView.email.value, "emailOk").toEqual(`info@anfelisa.de`)
	});
	it("emailValid", async () => {
		expect(appStates.emailValid.rootContainer.mainView.registrationView.email.emailInvalid, "emailValid").toEqual(false)
	});
	
	it("registerDisabled", async () => {
		expect(verifications.registerDisabled, "verifications.registerDisabled").toBeTrue();
	});
	it("username", async () => {
		expect(appStates.username.rootContainer.mainView.registrationView.username.value, "username").toEqual(`other-${testId}`)
	});
	it("usernameAvailable", async () => {
		expect(appStates.usernameAvailable.rootContainer.mainView.registrationView.username.available, "usernameAvailable").toEqual(true)
	});
	
	it("registerEnabled", async () => {
		expect(verifications.registerEnabled, "verifications.registerEnabled").toBeTrue();
	});

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
    
});





/******* S.D.G. *******/



