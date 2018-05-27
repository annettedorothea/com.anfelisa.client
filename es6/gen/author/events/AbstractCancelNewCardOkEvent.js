import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelNewCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CancelNewCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCardValues", "author.views.CategoriesView.hideDictionary" ];
	}
}


/*       S.D.G.       */
