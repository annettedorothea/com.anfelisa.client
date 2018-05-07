import Event from "../../../gen/ace/Event";

export default class AbstractCheckUsernameNotAvailableEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.CheckUsernameNotAvailableEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.RegistrationView.usernameNotAvailable" ];
	}
}


/*       S.D.G.       */