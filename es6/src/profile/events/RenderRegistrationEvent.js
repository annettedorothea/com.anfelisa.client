import AbstractRenderRegistrationEvent from "../../../gen/profile/events/AbstractRenderRegistrationEvent";

export default class RenderRegistrationEvent extends AbstractRenderRegistrationEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
