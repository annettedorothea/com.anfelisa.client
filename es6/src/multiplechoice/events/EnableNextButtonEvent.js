import AbstractEnableNextButtonEvent from "../../../gen/multiplechoice/events/AbstractEnableNextButtonEvent";

export default class EnableNextButtonEvent extends AbstractEnableNextButtonEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */