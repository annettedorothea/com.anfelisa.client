import Event from "../../../gen/ace/Event";

export default class AbstractSearchDuplicateCardsTooShortEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.SearchDuplicateCardsTooShortEvent');
    }
}


/*       S.D.G.       */
