import AbstractDeleteUserAdminSelfEvent from "../../../gen/admin/events/AbstractDeleteUserAdminSelfEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteUserAdminSelfEvent extends AbstractDeleteUserAdminSelfEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
