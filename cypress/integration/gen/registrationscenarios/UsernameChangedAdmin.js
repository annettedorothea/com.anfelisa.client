/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as RegistrationActionIds from "../../../acegen/gen/registration/RegistrationActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";

const testId = ScenarioUtils.testId();

context('UsernameChangedAdmin', () => {
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
    })

			// Hallo?!?!?
    it('username ', () => {
		//0
		ScenarioUtils.getCypressFor(RegistrationActionIds.usernameChanged, [`Admin`]).should(() => {
			const appState = JSON.parse(localStorage.getItem('appState'))
			expect(appState.rootContainer.mainView.username, "username").to.eql(`Admin`)
		});
    })
})




/******* S.D.G. *******/




