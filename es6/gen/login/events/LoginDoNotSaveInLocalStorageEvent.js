import Event from "../../../gen/ace/Event";

export default class LoginDoNotSaveInLocalStorageEvent extends Event {
    constructor(eventData) {
        super(eventData, 'login.LoginDoNotSaveInLocalStorageEvent');
    }
}


/*       S.D.G.       */
