import AbstractLoadBoxesAction from "../../../gen/box/actions/AbstractLoadBoxesAction";

export default class LoadBoxesAction extends AbstractLoadBoxesAction {

    initActionData(data) {
        let date = data.clientSystemTime;
        date.setHours(0,0,0,0);
        data.todayAtMidnightInUTC = date.toISOString();
        return data;
    }

}

/*       S.D.G.       */
