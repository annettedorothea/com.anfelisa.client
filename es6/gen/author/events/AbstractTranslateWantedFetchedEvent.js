import Event from "../../../gen/ace/Event";

export default class AbstractTranslateWantedFetchedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.TranslateWantedFetchedEvent');
    }
}


/*       S.D.G.       */
