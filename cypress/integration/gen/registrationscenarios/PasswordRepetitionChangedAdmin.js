/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as RegistrationActionIds from "../../../acegen/gen/registration/RegistrationActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";

const testId = ScenarioUtils.testId();

context('PasswordRepetitionChangedAdmin', () => {
    beforeEach(() => {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
		ScenarioUtils.getCypressFor(CommonActionIds.init);
		ScenarioUtils.getCypressFor(CommonActionIds.route, [`#registration`]);
		ScenarioUtils.getCypressFor(RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		ScenarioUtils.getCypressFor(RegistrationActionIds.passwordChanged, [`pas`]);
		ScenarioUtils.getCypressFor(RegistrationActionIds.passwordRepetitionChanged, [`password`]);
		ScenarioUtils.getCypressFor(RegistrationActionIds.passwordChanged, [`password`]);
		ScenarioUtils.getCypressFor(RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);
		nonDeterministicValues = JSON.parse(localStorage.getItem('nonDeterministicValues'));
		if (!nonDeterministicValues) {
			nonDeterministicValues = [];
		}
		nonDeterministicValue = {
			uuid: `uuid-${testId}`
		};
		nonDeterministicValues.push(nonDeterministicValue);
		AppUtils.httpPut(`/api/test/non-deterministic/value?uuid=uuid-${testId}&key=token&value=${testId}-TOKEN`);
		localStorage.setItem('nonDeterministicValues', JSON.stringify(nonDeterministicValues));
		ScenarioUtils.getCypressFor(RegistrationActionIds.registerUser);
		ScenarioUtils.getCypressFor(CommonActionIds.logout);
		ScenarioUtils.getCypressFor(CommonActionIds.route, [`#registration`]);
		ScenarioUtils.getCypressFor(RegistrationActionIds.usernameChanged, [`Admin`]);
		ScenarioUtils.getCypressFor(RegistrationActionIds.passwordChanged, [`password`]);
    })

			// Hallo?!?!?
    it('password passwordRepetition passwordMismatch ', () => {
		//0
		ScenarioUtils.getCypressFor(RegistrationActionIds.passwordRepetitionChanged, [`password`]).should(() => {
			const appState = JSON.parse(localStorage.getItem('appState'))
			expect(appState.rootContainer.mainView.password, "password").to.eql(`5f4dcc3b5aa765d61d8327deb882cf99`)
			expect(appState.rootContainer.mainView.passwordRepetition, "passwordRepetition").to.eql(`5f4dcc3b5aa765d61d8327deb882cf99`)
			expect(appState.rootContainer.mainView.passwordMismatch, "passwordMismatch").to.eql(false)
		});
    })
})




/******* S.D.G. *******/




