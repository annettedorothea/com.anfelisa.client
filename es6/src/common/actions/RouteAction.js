import AbstractRouteAction from "../../../gen/common/actions/AbstractRouteAction";

export default class RouteAction extends AbstractRouteAction {

    initActionData() {
        this.actionData.hash = this.actionParam.hash;
    }

}

/*       S.D.G.       */
