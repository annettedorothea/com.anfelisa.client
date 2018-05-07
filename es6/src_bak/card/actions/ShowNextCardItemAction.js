import AbstractShowNextCardItemAction from "../../../gen/card/actions/AbstractShowNextCardItemAction";

export default class ShowNextCardItemAction extends AbstractShowNextCardItemAction {

    captureActionParam() {
    	this.actionParam = {
    		flag: this.actionParam
		}
    }

    initActionData() {
		this.actionData.flag = this.actionParam.flag;
    }

}

/*       S.D.G.       */