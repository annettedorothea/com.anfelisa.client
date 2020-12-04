/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import RouteChangedLoginEvent from "../../../gen/common/events/RouteChangedLoginEvent";
import RouteChangedRegistrationEvent from "../../../gen/common/events/RouteChangedRegistrationEvent";
import RouteChangedForgotPasswordEvent from "../../../gen/common/events/RouteChangedForgotPasswordEvent";
import RouteChangedResetPasswordEvent from "../../../gen/common/events/RouteChangedResetPasswordEvent";
import RouteChangedCategoriesEvent from "../../../gen/common/events/RouteChangedCategoriesEvent";
import RouteChangedNextCardEvent from "../../../gen/common/events/RouteChangedNextCardEvent";
import RouteChangedBoxSettingsEvent from "../../../gen/common/events/RouteChangedBoxSettingsEvent";
import RouteChangedBoxCreateEvent from "../../../gen/common/events/RouteChangedBoxCreateEvent";
import ConfirmEmailAction from "../../../src/registration/actions/ConfirmEmailAction";
import InitBoxesForDayAction from "../../../src/box/actions/InitBoxesForDayAction";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import LoadSettingsAction from "../../../src/box/actions/LoadSettingsAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractRouteChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.RouteChangedCommand");
        this.commandData.outcomes = [];
        this.commandData.hash = AppState.get_hash();
        this.commandData.loggedInUser = AppState.get_loggedInUser();
    }

	addLoginOutcome() {
		this.commandData.outcomes.push("login");
	}
	addRegistrationOutcome() {
		this.commandData.outcomes.push("registration");
	}
	addConfirmEmailOutcome() {
		this.commandData.outcomes.push("confirmEmail");
	}
	addForgotPasswordOutcome() {
		this.commandData.outcomes.push("forgotPassword");
	}
	addResetPasswordOutcome() {
		this.commandData.outcomes.push("resetPassword");
	}
	addDashboardOutcome() {
		this.commandData.outcomes.push("dashboard");
	}
	addCategoriesOutcome() {
		this.commandData.outcomes.push("categories");
	}
	addProfileOutcome() {
		this.commandData.outcomes.push("profile");
	}
	addUserListOutcome() {
		this.commandData.outcomes.push("userList");
	}
	addNextCardOutcome() {
		this.commandData.outcomes.push("nextCard");
	}
	addBoxSettingsOutcome() {
		this.commandData.outcomes.push("boxSettings");
	}
	addBoxCreateOutcome() {
		this.commandData.outcomes.push("boxCreate");
	}
	addInvalidOutcome() {
		this.commandData.outcomes.push("invalid");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("login")) {
			new RouteChangedLoginEvent(this.commandData).publish();
		}
		if (this.commandData.outcomes.includes("registration")) {
			new RouteChangedRegistrationEvent(this.commandData).publish();
		}
		if (this.commandData.outcomes.includes("confirmEmail")) {
			new TriggerAction(new ConfirmEmailAction(this.commandData.username, this.commandData.token)).publish();
		}
		if (this.commandData.outcomes.includes("forgotPassword")) {
			new RouteChangedForgotPasswordEvent(this.commandData).publish();
		}
		if (this.commandData.outcomes.includes("resetPassword")) {
			new RouteChangedResetPasswordEvent(this.commandData).publish();
		}
		if (this.commandData.outcomes.includes("dashboard")) {
			new TriggerAction(new InitBoxesForDayAction()).publish();
		}
		if (this.commandData.outcomes.includes("categories")) {
			new RouteChangedCategoriesEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish();
		}
		if (this.commandData.outcomes.includes("profile")) {
			new TriggerAction(new LoadUserAction()).publish();
		}
		if (this.commandData.outcomes.includes("userList")) {
			new TriggerAction(new GetAllUsersAction()).publish();
		}
		if (this.commandData.outcomes.includes("nextCard")) {
			new RouteChangedNextCardEvent(this.commandData).publish();
			new TriggerAction(new LoadNextCardAction()).publish();
		}
		if (this.commandData.outcomes.includes("boxSettings")) {
			new RouteChangedBoxSettingsEvent(this.commandData).publish();
			new TriggerAction(new LoadSettingsAction()).publish();
		}
		if (this.commandData.outcomes.includes("boxCreate")) {
			new RouteChangedBoxCreateEvent(this.commandData).publish();
		}
		if (this.commandData.outcomes.includes("invalid")) {
			new TriggerAction(new RouteAction(this.commandData.hash)).publish();
		}
    }
}




/******* S.D.G. *******/



