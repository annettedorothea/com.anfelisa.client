/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";

export const Buttons = (props) => {
    return <div className="cardViewSecondHeader">
        <input
            className="checkbox"
            type="checkbox"
            onChange={props.toggleAllScheduleCardSelection}
            checked={props.cardList.length > 0 && props.selectedCardIds.length === props.cardList.length}
            id="toggle-all"
        />
        <div className="toolbarContainer">
            <div className="toolbar">
                {props.children}
            </div>
        </div>
    </div>
}


/******* S.D.G. *******/



