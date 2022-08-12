import AbstractLoadNextCardAction from "../../../gen/box/actions/AbstractLoadNextCardAction";

export default class LoadNextCardAction extends AbstractLoadNextCardAction {

    initActionData(data) {
        let date = data.clientSystemTime;
        date.setHours(0, 0, 0, 0);
        data.todayAtMidnightInUTC = date.toISOString();
        return data;
    }

}

/*       S.D.G.       */
