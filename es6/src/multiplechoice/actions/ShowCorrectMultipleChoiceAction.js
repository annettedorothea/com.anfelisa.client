import AbstractShowCorrectMultipleChoiceAction from "../../../gen/multiplechoice/actions/AbstractShowCorrectMultipleChoiceAction";

export default class ShowCorrectMultipleChoiceAction extends AbstractShowCorrectMultipleChoiceAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.itemId = this.actionParam.itemId;
		this.actionData.last = this.actionParam.last;
		this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */