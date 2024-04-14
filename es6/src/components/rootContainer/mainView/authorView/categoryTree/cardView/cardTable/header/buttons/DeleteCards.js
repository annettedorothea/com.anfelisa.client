/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../../../../../../AppUtils";
import {Texts} from "../../../../../../../../../app/Texts";

export const DeleteCards = (props) => {
    return <button
        onClick={props.onClick}
        title={translate(Texts.cardList.deleteSelectedCards)}
        disabled={props.selectedCardIds.length === 0}
    >
        <i className="far fa-trash-alt"/>
    </button>
}


/******* S.D.G. *******/


