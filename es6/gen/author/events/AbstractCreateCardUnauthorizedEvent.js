import Event from "../../../gen/ace/Event";

export default class AbstractCreateCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CreateCardUnauthorizedEvent');
    }
}


/*       S.D.G.       */
