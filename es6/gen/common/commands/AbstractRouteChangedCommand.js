/********************************************************************************
 * generated by de.acegen 1.0.2
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
        this.login = "login";
        this.registration = "registration";
        this.confirmEmail = "confirmEmail";
        this.forgotPassword = "forgotPassword";
        this.resetPassword = "resetPassword";
        this.dashboard = "dashboard";
        this.categories = "categories";
        this.profile = "profile";
        this.userList = "userList";
        this.nextCard = "nextCard";
        this.boxSettings = "boxSettings";
        this.boxCreate = "boxCreate";
        this.invalid = "invalid";
        this.commandData.hash = AppState.get_hash();
        this.commandData.loggedInUser = AppState.get_loggedInUser();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.login:
			new RouteChangedLoginEvent(this.commandData).publish();
			break;
		case this.registration:
			new RouteChangedRegistrationEvent(this.commandData).publish();
			break;
		case this.confirmEmail:
			new TriggerAction(new ConfirmEmailAction(this.commandData.username, this.commandData.token)).publish();
			break;
		case this.forgotPassword:
			new RouteChangedForgotPasswordEvent(this.commandData).publish();
			break;
		case this.resetPassword:
			new RouteChangedResetPasswordEvent(this.commandData).publish();
			break;
		case this.dashboard:
			new TriggerAction(new InitBoxesForDayAction()).publish();
			break;
		case this.categories:
			new RouteChangedCategoriesEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish();
			break;
		case this.profile:
			new TriggerAction(new LoadUserAction()).publish();
			break;
		case this.userList:
			new TriggerAction(new GetAllUsersAction()).publish();
			break;
		case this.nextCard:
			new RouteChangedNextCardEvent(this.commandData).publish();
			new TriggerAction(new LoadNextCardAction()).publish();
			break;
		case this.boxSettings:
			new RouteChangedBoxSettingsEvent(this.commandData).publish();
			new TriggerAction(new LoadSettingsAction()).publish();
			break;
		case this.boxCreate:
			new RouteChangedBoxCreateEvent(this.commandData).publish();
			break;
		case this.invalid:
			new TriggerAction(new RouteAction(this.commandData.hash)).publish();
			break;
		default:
			throw 'RouteChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



