import Event from "../../../gen/ace/Event";

export default class AbstractUpdateCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.UpdateCardUnauthorizedEvent');
    }
}


/*       S.D.G.       */
