import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractRegisterUserOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RegisterUserOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
