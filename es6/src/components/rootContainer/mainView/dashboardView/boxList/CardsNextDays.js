/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const CardsNextDays = (props) => {
    if (props.archived === true) {
        return null;
    }

    if (props.countsPerDayNextWeek && props.countsPerDayNextWeek.length === 7) {
        let index = 0;
        const weekdays = props.countsPerDayNextWeek.map((count) => {
            index++;
            const weekDay = (index + props.todaysWeekDay) % 7;
            return <div key={weekDay} className="weekday">
                {translate(Texts.box.weekDays[weekDay])}
            </div>
        });
        const todos = props.countsPerDayNextWeek.map((count) => {
            index++;
            return <div key={index}>{count}</div>
        });
        return <div className="cards-next-days">
            <div className="next-days-header">{translate(Texts.box.nextWeek)}</div>
            <div
                className="calendar"
            >
                {weekdays}
                {todos}
            </div>
        </div>
    }
    return null;
}


/******* S.D.G. *******/



