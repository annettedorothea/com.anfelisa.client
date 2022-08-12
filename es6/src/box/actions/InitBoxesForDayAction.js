

import AbstractInitBoxesForDayAction from "../../../gen/box/actions/AbstractInitBoxesForDayAction";

export default class InitBoxesForDayAction extends AbstractInitBoxesForDayAction {

    initActionData(data) {
        let date = data.clientSystemTime;
        date.setHours(0,0,0,0);
        data.todayAtMidnightInUTC = date.toISOString();
        return data;
    }

}




/******* S.D.G. *******/



