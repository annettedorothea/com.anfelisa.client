import ACEController from "../ace/ACEController";
import BoxListView from "../../src/box/views/BoxListView";
import CommonView from "../../src/common/views/CommonView";
import CreateBoxView from "../../src/box/views/CreateBoxView";
import BoxView from "../../src/box/views/BoxView";

export default class EventListenerRegistrationBox {

	static init() {
		ACEController.registerListener('box.LoadBoxesOkEvent', BoxListView.render);
		ACEController.registerListener('box.LoadBoxesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.LoadRootCategoriesOkEvent', CreateBoxView.render);
		ACEController.registerListener('box.LoadRootCategoriesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.ToggleMaxIntervalOkEvent', CreateBoxView.toggleMaxInterval);
		ACEController.registerListener('box.MaxIntervalChangedOkEvent', CreateBoxView.maxIntervalChanged);
		ACEController.registerListener('box.CategorySelectedOkEvent', CreateBoxView.categorySelected);
		ACEController.registerListener('box.CreateBoxUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.EditBoxOkEvent', BoxListView.editBox);
		ACEController.registerListener('box.ToggleMaxIntervalOfBoxOkEvent', BoxListView.toggleMaxInterval);
		ACEController.registerListener('box.MaxIntervalChangedOfBoxOkEvent', BoxListView.maxIntervalChanged);
		ACEController.registerListener('box.CancelEditBoxOkEvent', BoxListView.cancelEditBox);
		ACEController.registerListener('box.UpdateBoxUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.DeleteBoxClickOkEvent', BoxListView.displayConfirmDelete);
		ACEController.registerListener('box.CancelDeleteBoxOkEvent', BoxListView.hideConfirmDelete);
		ACEController.registerListener('box.DeleteBoxUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.PostponeCardsOfBoxUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.LoadNextCardOkEvent', BoxView.render);
		ACEController.registerListener('box.LoadNextCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.ScheduleNextCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('box.DisplayWantedAllEvent', BoxView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedAllEvent', BoxView.enableScoreButtons);
		ACEController.registerListener('box.DisplayWantedNotAllEvent', BoxView.displayNextItem);
		ACEController.registerListener('box.DisplayWantedImageEvent', BoxView.displayImage);
		ACEController.registerListener('box.DisplayWantedImageEvent', BoxView.enableScoreButtons);
		ACEController.registerListener('box.ScoreCardUnauthorizedEvent', CommonView.displayError);
	}

}

/*       S.D.G.       */
