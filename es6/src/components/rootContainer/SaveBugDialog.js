/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import React from "react";
import {Texts} from "../../app/Texts";
import {callSaveBug, cancelSaveBugDialog} from "../../../gen/common/ActionFunctions";

export function uiElement(props) {
    if (props.display === true) {
        return <div className="modal">
            <div className="modalContent">
                <h2>{Texts.container.unexpectedBug[props.language]}</h2>
                <div className="message">{Texts.container.unexpectedBugMessage[props.language]}</div>
                <button
                    className="yes"
                    onClick={callSaveBug}
                >
                    {Texts.container.yes[props.language]}
                </button>
                <button
                    onClick={cancelSaveBugDialog}
                >
                    {Texts.container.no[props.language]}
                </button>
            </div>

        </div>
    }
    return null;
}


/******* S.D.G. *******/



