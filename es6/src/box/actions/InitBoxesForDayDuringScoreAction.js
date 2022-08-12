

import AbstractInitBoxesForDayDuringScoreAction from "../../../gen/box/actions/AbstractInitBoxesForDayDuringScoreAction";

export default class InitBoxesForDayDuringScoreAction extends AbstractInitBoxesForDayDuringScoreAction {

    initActionData(data) {
        let date = data.clientSystemTime;
        date.setHours(0,0,0,0);
        data.todayAtMidnightInUTC = date.toISOString();
        return data;
    }

}




/******* S.D.G. *******/



