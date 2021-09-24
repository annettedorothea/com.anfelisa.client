/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import ConfirmEmailAction from "../../../src/registration/actions/ConfirmEmailAction";
import InitBoxesForDayAction from "../../../src/box/actions/InitBoxesForDayAction";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import LoadSettingsAction from "../../../src/box/actions/LoadSettingsAction";
import LoadActiveCardsAction from "../../../src/box/actions/LoadActiveCardsAction";
import RouteAction from "../../../src/common/actions/RouteAction";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractRouteChangedCommand extends SynchronousCommand {
    constructor() {
        super("common.RouteChangedCommand");
    }

    initCommandData(data) {
        data.hash = AppUtils.getHash(
        	["rootContainer", "hash"]
        );
        data.loggedInUser = AppUtils.get(
        	["rootContainer", "loggedInUser"], 
        	["username", "token"]
        );
        data.outcomes = [];
    }

	addLoginOutcome(data) {
		data.outcomes.push("login");
	}
	addPrivacyPolicyOutcome(data) {
		data.outcomes.push("privacyPolicy");
	}
	addRegistrationOutcome(data) {
		data.outcomes.push("registration");
	}
	addConfirmEmailOutcome(data) {
		data.outcomes.push("confirmEmail");
	}
	addForgotPasswordOutcome(data) {
		data.outcomes.push("forgotPassword");
	}
	addResetPasswordOutcome(data) {
		data.outcomes.push("resetPassword");
	}
	addDashboardOutcome(data) {
		data.outcomes.push("dashboard");
	}
	addCategoriesOutcome(data) {
		data.outcomes.push("categories");
	}
	addProfileOutcome(data) {
		data.outcomes.push("profile");
	}
	addNextCardOutcome(data) {
		data.outcomes.push("nextCard");
	}
	addBoxSettingsOutcome(data) {
		data.outcomes.push("boxSettings");
	}
	addAllActiveCardsOutcome(data) {
		data.outcomes.push("allActiveCards");
	}
	addBoxCreateOutcome(data) {
		data.outcomes.push("boxCreate");
	}
	addInvalidOutcome(data) {
		data.outcomes.push("invalid");
	}

    publishEvents(data) {
		if (data.outcomes.includes("login")) {
			new Event('common.RouteChangedLoginEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("privacyPolicy")) {
			new Event('common.RouteChangedPrivacyPolicyEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("registration")) {
			new Event('common.RouteChangedRegistrationEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("confirmEmail")) {
			new TriggerAction().publish(
				new ConfirmEmailAction(), 
					{
						username: data.username, 
						token: data.token
					}
			)
		}
		if (data.outcomes.includes("forgotPassword")) {
			new Event('common.RouteChangedForgotPasswordEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("resetPassword")) {
			new Event('common.RouteChangedResetPasswordEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("dashboard")) {
			new Event('common.RouteChangedDashboardEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new InitBoxesForDayAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("categories")) {
			new Event('common.RouteChangedCategoriesEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LoadCategoryTreeAction(), 
					{
						rootCategoryId: data.rootCategoryId, 
						selectedCategoryId: data.selectedCategoryId
					}
			)
		}
		if (data.outcomes.includes("profile")) {
			new Event('common.RouteChangedProfileEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LoadUserAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("nextCard")) {
			new Event('common.RouteChangedNextCardEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LoadNextCardAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("boxSettings")) {
			new Event('common.RouteChangedBoxSettingsEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LoadSettingsAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("allActiveCards")) {
			new Event('common.RouteChangedAllActiveCardsEvent').publish(data);
			AppUtils.stateUpdated();
			new TriggerAction().publish(
				new LoadActiveCardsAction(), 
					{
					}
			)
		}
		if (data.outcomes.includes("boxCreate")) {
			new Event('common.RouteChangedBoxCreateEvent').publish(data);
			AppUtils.stateUpdated();
		}
		if (data.outcomes.includes("invalid")) {
			new TriggerAction().publish(
				new RouteAction(), 
					{
						hash: data.hash
					}
			)
		}
    }
}




/******* S.D.G. *******/



