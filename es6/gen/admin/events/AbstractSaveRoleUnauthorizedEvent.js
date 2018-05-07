import Event from "../../../gen/ace/Event";

export default class AbstractSaveRoleUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.SaveRoleUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */