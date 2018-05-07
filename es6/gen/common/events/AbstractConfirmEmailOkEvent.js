import Event from "../../../gen/ace/Event";

export default class AbstractConfirmEmailOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ConfirmEmailOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayMessage" ];
	}
}


/*       S.D.G.       */