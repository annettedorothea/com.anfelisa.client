import AbstractFinishCardAction from "../../../gen/card/actions/AbstractFinishCardAction";

export default class FinishCardAction extends AbstractFinishCardAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.points = this.actionParam.points;
		this.actionData.maxPoints = this.actionParam.maxPoints;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */