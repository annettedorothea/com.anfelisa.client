import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmDelete" ];
	}
}


/*       S.D.G.       */