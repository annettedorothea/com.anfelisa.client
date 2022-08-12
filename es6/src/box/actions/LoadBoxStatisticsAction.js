


import AbstractLoadBoxStatisticsAction from "../../../gen/box/actions/AbstractLoadBoxStatisticsAction";

export default class LoadBoxStatisticsAction extends AbstractLoadBoxStatisticsAction {

    initActionData(data) {
        let date = data.clientSystemTime;
        date.setHours(0,0,0,0);
        data.todayAtMidnightInUTC = date.toISOString();
        return data;
    }

}




/******* S.D.G. *******/



