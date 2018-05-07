import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCategoryUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCategoryUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideConfirmDelete" ];
	}
}


/*       S.D.G.       */
